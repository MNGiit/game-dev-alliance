const mongoose = require("mongoose");
// const mongoose = require("./connection");

// const { Schema, model } = mongoose; // week 9 day 3

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    username: {type: String, required: true}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;