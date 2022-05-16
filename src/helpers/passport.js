const passport = require('passport')
const LocalStrategy  = require('passport-local').Strategy
const {User} = require('../model/users')

passport.use (
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email,password,done) => {
    // Verify email exist
    const user = await User.findOne({email: email})
    if(!user)
      return done(null,false,{message: 'Email no exist'})

    // Verify password match
    const check = await user.checkPassword(password)
    if(check)
      return done(null,user)
    else
      return done(null,false,{message: 'Password Incorrect'})
  })
)

passport.serializeUser((user,done)=>{
  console.log('serialize')
  // @ts-ignore
  return done(null,user._id)
})

passport.deserializeUser((id,done) => {
  console.log('Deserialize')
  User.findById(id,(error,user) => {
    return done(error,user)
  })
})