class SiteController {

    //[get] courses
    index(req, res) {
        res.send('Site');
    }

    //[get] search
    search(req, res) {
        res.send('Search');
    }

}

module.exports = new SiteController