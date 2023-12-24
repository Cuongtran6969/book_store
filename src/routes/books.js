const express = require('express')
const router = express.Router();

const booksController = require('../app/controller/BooksController')

router.get('/:slug', booksController.show);

router.get('/', booksController.index);


module.exports = router