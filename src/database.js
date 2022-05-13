const mongoose = require('mongoose')
const Notes = require ('./model/notes')

const {DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOSTNAME} = process.env
const MONGODB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_DATABASE}`

mongoose.connect(MONGODB_URI)
.then((conn) => {
  console.log(('Database connected succesfully'))
  
})
.catch((error) => {
  console.log(error)
})