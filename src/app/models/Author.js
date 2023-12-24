const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Author = new Schema({
    image: { type: String, default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw0P6J2hLs7ooR7uq9U-_7Q6&ust=1703497157226000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLihxsnjp4MDFQAAAAAdAAAAABAE" },
    job: String,
    name: String,
    socials: Object
})

module.exports = mongoose.model('Author', Author)