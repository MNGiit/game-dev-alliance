const mongoose = require("mongoose");
// const mongoose = require("./connection");

// const { Schema, model } = mongoose; // week 9 day 3

const gameSchema = new mongoose.Schema({
    name: {type: String, required: true},  // name of the game
    imgurl: {type: String },                // the url of the img
    description: {type: String }            // name of user that is commenting
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;