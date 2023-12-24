const Book = require('../models/Book');
const Author = require('../models/Author');
const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class SiteController {

    //[get] courses
    async index(req, res, next) {

        try {
            const books = await Book.find({})
            const authors = await Author.find({})
            const booksData = multipleMongooseToObject(books);
            const authorsData = multipleMongooseToObject(authors);
            res.render('home', { booksData, authorsData })
        } catch (error) {
            next(error)
        }
    }

    //[get] search
    search(req, res) {
        res.send('Search');
    }

}

module.exports = new SiteController