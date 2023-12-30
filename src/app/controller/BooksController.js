const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CoursesController {

    //[get] /books/:slug
    show(req, res, next) {
        Book.findOne({ slug: req.params.slug })
            .then(book => res.render('books/bookDetail', { book: mongooseToObject(book) }))
            .catch(next)
    }
    create(req, res, next) {
        res.render('books/create')
    }

    store(req, res, next) {
        const book = new Book(req.body)
        book.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }


}

module.exports = new CoursesController;