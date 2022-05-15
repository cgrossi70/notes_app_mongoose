const signin = (req, res) => {
  res.render('users/signin', {title: 'Sigiin'})
}

const register = (req, res) => {
  res.render('users/register', {title: 'Register'})
}

module.exports = {
  signin,
  register
}
