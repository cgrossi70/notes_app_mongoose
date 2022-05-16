const notesCtrl = {}
const Note = require('../model/notes')

notesCtrl.renderAddForm = (req,res) => {
  res.render('notes/add_form',{title: 'Add Note Form'})
}

notesCtrl.addNote = async (req,res) => {
  const {title, description} = req.body
  const note = new Note ({title, description, user: 'Yo'})
  note.user = req.user.id
  await note.save()
  req.flash('success_msg','Note added succesfully')
  res.redirect('/notes')
}

notesCtrl.renderEditForm = async (req,res) => {
  const note = await Note.findById(req.params.id).lean()
  if(note.user !== req.user.id)
   {
     req.flash('error_msg',[{error: 'Not Authorized !!!'}])
     res.redirect('/notes')
   } 
  res.render('notes/edit_form',{ note })
}

notesCtrl.editNote  = async (req,res) => {
  const { title, description } = req.body
  await Note.findByIdAndUpdate(req.params.id,{title,description})
  req.flash('success_msg','Note updated succesfully')
  res.redirect('/notes')
}

notesCtrl.deleteNote = async (req,res) => {
  await Note.findByIdAndDelete(req.params.id)
  req.flash('success_msg','Note deleted succesfully')
  res.redirect('/notes')
}

notesCtrl.renderList = async (req,res) => {
  const notes = await Note.find({user: req.user.id}).lean()
  res.render('notes/list',{notes})
}

module.exports = notesCtrl