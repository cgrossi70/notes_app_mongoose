const helpers = {}

helpers.isAuthenticated = (req,res,next) => {
  if(req.isAuthenticated())
    return next()
  else {
    req.flash('error_msg',[{error: 'Not autorhized'}])
    res.redirect('/users/login')
  }
}

module.exports = helpers