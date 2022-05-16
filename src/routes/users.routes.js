const { Router} = require('express')
const { renderRegisterForm, addUser, renderLoginForm, login, logout } = require('../controllers/users.controllers')

const router = Router()

router.get('/users/register',renderRegisterForm)
router.post('/users/register',addUser)

router.get('/users/login',renderLoginForm)
router.post('/users/login', login)

router.get('/users/logout',logout)

module.exports = router