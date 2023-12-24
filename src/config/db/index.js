const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/book_store')
        console.log('connect success')
    } catch (error) {
        console.log('Connect failure')
    }
}

module.exports = { connect }