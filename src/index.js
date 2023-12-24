
const path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const exp = require('constants');

const app = express()
const port = 3000

const db = require('./config/db')
//connect db
db.connect()
const route = require('./routes')
//khai bao de su dung post from form
app.use(express.urlencoded({
    extended: true
}))
//xu ly statics file
app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))
//template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//path engine
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})