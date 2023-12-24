const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Book = new Schema({
    description: String,
    numberRating: Number,
    poster: String,
    rating: Number,
    time: Number,
    type: String,
    title: String,
    videoURL: String,
    views: Number,
    language: String
});
module.exports = mongoose.model('Book', Book)