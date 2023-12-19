class SiteController {

    //[get] courses
    index(req, res) {
        res.render('home');
    }

    //[get] search
    search(req, res) {
        res.send('Search');
    }

}

module.exports = new SiteController