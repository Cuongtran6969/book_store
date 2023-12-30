//cac muc nhu la: search, home, contact
const express = require('express')
const router = express.Router();

const meController = require('../app/controller/MeController')

router.get('/', meController.index);

module.exports = router