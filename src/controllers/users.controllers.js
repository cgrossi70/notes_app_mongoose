const signin = (req, res) => {
  res.render('signin', {title: 'Sigiin'})
}

const register = (req, res) => {
  res.render('register', {title: 'Register'})
}

module.exports = {
  signin,
  register
}
