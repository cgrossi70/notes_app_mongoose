const { Router } = require('express')
const {index} = require('../controllers/index.controllers')

const router = Router()

router.get('/',index)

module.exports = router