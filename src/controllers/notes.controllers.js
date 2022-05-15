const notesCtrl = {}
const Note = require('../model/notes')

notesCtrl.renderAddForm = (req,res) => {
  res.render('notes/add_form',{title: 'Add Note Form'})
}

notesCtrl.addNote = async (req,res) => {
  const {title, description} = req.body
  const note = new Note ({title, description, user: 'Yo'})
  await note.save()
  res.redirect('/notes')
}

notesCtrl.renderEditForm = async (req,res) => {
  const note = await Note.findById(req.params.id).lean()
  res.render('notes/edit_form',{ note })
}

notesCtrl.editNote  = async (req,res) => {
  const { title, description } = req.body
  await Note.findByIdAndUpdate(req.params.id,{title,description})
  res.redirect('/notes')
}

notesCtrl.deleteNote = async (req,res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.redirect('/notes')
}

notesCtrl.renderList = async (req,res) => {
  const notes = await Note.find().lean()
  res.render('notes/list',{notes})
}

module.exports = notesCtrl