const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const { title } = require('process')


// Initialize
const app = express()

// Settings
app.set('port',process.env.PORT)
app.set('views', path.join(__dirname, 'views'))

// Handlebars
app.engine('.hbs',engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'),'partials')
}))
app.set('view engine','.hbs')

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Globals 

// Public 
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.get('/',(req,res) => {
  res.render('index',{title: 'Home'})
})

module.exports = app