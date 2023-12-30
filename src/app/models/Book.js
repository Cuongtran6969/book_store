const mongoose = require("mongoose");
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
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
    language: String,
    slug: { type: String, slug: "title", unique: true }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Book', Book)