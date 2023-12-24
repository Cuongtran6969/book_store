const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CoursesController {

    //[get] courses
    index(req, res) {
        res.render('books');
    }

    //[get] /books/:slug
    show(req, res, next) {
        Book.findOne({ title: req.params.slug })
            .then(book => res.render('bookDetail', { book: mongooseToObject(book) }))
            .catch(next)
    }
}

module.exports = new CoursesController;