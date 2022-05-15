const { Router} = require('express')
const { register, signin } = require('../controllers/users.controllers')

const router = Router()

router.get('/users/register',register)
router.get('/users/signin',signin)

module.exports = router