const mongoose = require("mongoose");
// const mongoose = require("./connection");

// const { Schema, model } = mongoose; // week 9 day 3

const commentSchema = new mongoose.Schema({
    commentable: {type: String, required: true},    // the subject that the user is commenting on
    username: {type: String, required: true},       // name of user that is commenting
    content: {type: String, required: true}         // the actual content/comment
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;