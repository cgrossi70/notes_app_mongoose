const { Router} = require('express')
const { register, signin } = require('../controllers/users.controllers')

const router = Router()

router.get('/register',register)
router.get('/signin',signin)

module.exports = router