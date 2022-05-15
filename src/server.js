const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const morgan = require('morgan')


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
app.use(methodOverride('_method'))
app.use(morgan('dev'))
// Globals 


// Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/users.routes'))
app.use(require('./routes/notes.routes'))

// Public 
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app