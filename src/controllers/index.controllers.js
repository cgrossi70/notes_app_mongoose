const index = (req,res) => {
  res.render('index',{ title: 'Home' })
}

const about = (req,res) => {
  res.render('about',{ title: 'About' })
}

module.exports = {
  index,
  about
}