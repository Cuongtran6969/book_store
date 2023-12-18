const express = require('express')
const router = express.Router();

const booksController = require('../app/controller/BooksController')

router.use('/:slug', booksController.show);

router.use('/', booksController.index);


module.exports = router