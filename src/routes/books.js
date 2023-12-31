const express = require('express')
const router = express.Router();

const booksController = require('../app/controller/BooksController')

router.get('/create', booksController.create);

router.post('/store', booksController.store);

router.get('/:slug', booksController.show);

module.exports = router