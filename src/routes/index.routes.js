const { Router } = require('express')
const {index, about} = require('../controllers/index.controllers')

const router = Router()

router.get('/',index)
router.get('/about',about)

module.exports = router