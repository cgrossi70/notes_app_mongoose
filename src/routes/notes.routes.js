const { Router } = require('express')
const {
  renderAddForm,
  addNote,
  renderEditForm,
  editNote,
  deleteNote,
  renderList
} = require('../controllers/notes.controllers')

const router = Router()

// List Notes
router.get('/notes',renderList)

// Add Notes
router.get('/notes/add',renderAddForm)
router.post('/notes/add',addNote)

// Edit Note
router.get('/notes/edit/:id', renderEditForm)
router.put('/notes/edit/:id', editNote)

//Delete Note
router.delete('/notes/delete/:id', deleteNote)


module.exports = router