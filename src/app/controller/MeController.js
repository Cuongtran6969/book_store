const Book = require('../models/Book');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CoursesController {

    //[get] courses
    index(req, res, next) {
        Book.find({})
            .then(books => res.render('me/me-stored', { books: multipleMongooseToObject(books) }))
            .catch(next)
    }

}

module.exports = new CoursesController;