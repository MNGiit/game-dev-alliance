const mongoose = require("mongoose");
// const mongoose = require("./connection");

// const { Schema, model } = mongoose; // week 9 day 3

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;

