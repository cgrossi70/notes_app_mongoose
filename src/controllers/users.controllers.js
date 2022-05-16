const  {User}=require('../model/users')
const passport = require ('passport')

const renderLoginForm = (req, res) => {
  res.render('users/login', {title: 'login'})
}

const login = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/login",
    failureFlash: true,
  })

const renderRegisterForm = (req, res) => {
  res.render('users/register', {title: 'Register'})
}

const addUser = async (req, res) => {
  const errors = []
  const {name, email, password, confirm_password } = req.body
  if(password !== confirm_password)
    errors.push({error: 'Password must be identicals' })
  if(password.length < 4)
    errors.push({error: 'Password must be at least 4 charanters' })
  
  const userEmail = await User.findOne({email: email})
  
  if(userEmail)
    errors.push({error: 'Email already exists' }) 

  if(errors.length !== 0){
    req.flash('error_msg',errors)
    res.redirect('/users/register')
  }
  else{
    const user = new User({name, email, password})
    user.password = await user.encryptPassword(password)
    await user.save()
    req.flash('success_msg','Please Login')
    res.redirect('/users/login')
  }
}

const logout = (req, res) => {
  req.logout()
  req.flash('success_msg','You are logged out ....')
  res.redirect('/users/login')
}

module.exports = {
  renderLoginForm,
  renderRegisterForm,
  addUser,
  login,
  logout
}
