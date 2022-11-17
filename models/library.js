const mongoose = require("mongoose");
// const mongoose = require("./connection");

// const { Schema, model } = mongoose; // week 9 day 3

const librarySchema = new mongoose.Schema({
    username: {type: String, required: true},       // name of user that is commenting
    gamename: {type: String, required: true}         // the actual content/comment
});

const Library = mongoose.model('Library', librarySchema);

module.exports = Library;