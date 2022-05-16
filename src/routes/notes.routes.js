const { Router } = require('express')
const {
  renderAddForm,
  addNote,
  renderEditForm,
  editNote,
  deleteNote,
  renderList
} = require('../controllers/notes.controllers')
const {isAuthenticated} = require('../helpers/auth')

const router = Router()

// List Notes
router.get('/notes', isAuthenticated, renderList)

// Add Notes
router.get('/notes/add', isAuthenticated,renderAddForm)
router.post('/notes/add', isAuthenticated,addNote)

// Edit Note
router.get('/notes/edit/:id', isAuthenticated, renderEditForm)
router.put('/notes/edit/:id', isAuthenticated, editNote)

//Delete Note
router.delete('/notes/delete/:id', isAuthenticated, deleteNote)


module.exports = router