const { Schema, model } = require('mongoose')

const NotesSchema = new Schema( 
  {
    title: { 
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }, 
    user: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

const NotesModel  = model('notes',NotesSchema)
module.exports = NotesModel