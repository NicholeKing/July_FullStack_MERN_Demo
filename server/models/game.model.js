const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    art: {
        type: String,
        required: [true, "Cover art is required!"]
    },
    rating: {
        type: String,
        required: [true, "Rating is required!"]
    },
    category: {
        type: String,
        required: [true, "Category is required!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [10, "Description must be longer!"],
        maxlength: [1000, "Description must be less than 1000 characters!"]
    },
    minPlayers: {
        type: Number,
        required: [true, "Must have a minimum number of players!"],
        min: [1, "There must be at least 1 player!!"]
    },
    maxPlayers: {
        type: Number, 
        required: [false],
        min: [2, "Minumum number of max players must be at least 2"]
    }
}, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;