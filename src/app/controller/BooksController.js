class CoursesController {

    //[get] courses
    index(req, res) {
        res.render('books');
    }

    //[get] /books/:slug
    show(req, res) {
        res.render('bookDetail');
    }
}

module.exports = new CoursesController;