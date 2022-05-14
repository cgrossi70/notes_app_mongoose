const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const usersRoutes = require('./routes/users.routes')
const notesRoutes = require('./routes/notes.routes')
const indexRoutes = require('./routes/index.routes')


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


// Routes
app.use(indexRoutes)
app.use(notesRoutes)
app.use(usersRoutes)

// Public 
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app