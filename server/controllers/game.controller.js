// we need our model to work with
const Game = require("../models/game.model");

// CREATE
module.exports.createGame = (req, res) => {
    Game.create(req.body)
        .then(newGame => res.json(newGame))
        .catch(err => res.json({message: "Something went wrong when adding a game to the database!!", err: err}))
}

// READ ALL
module.exports.findAllGames = (req, res) => {
    Game.find()
        .then(allGames => res.json(allGames))
        .catch(err => res.json({message: "Something went wrong when grabbing all games!!", err: err}))
}

// READ ONE
module.exports.findOneGame = (req, res) => {
    Game.findOne({_id: req.params._id})
        .then(oneGame => res.json(oneGame))
        .catch(err => res.json({message: "Something went wrong when grabbing one game!!", err: err}))
}

// UPDATE
module.exports.updateGame = (req, res) => {
    Game.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneGame => res.json(oneGame))
        .catch(err => res.json({message: "Something went wrong when updating a game!!", err: err}))
}

// DELETE
module.exports.deleteGame = (req, res) => {
    Game.remove({_id: req.params._id})
        .then(res.json({message: "Game was successfully removed!"}))
        .catch(err => res.json({message: "Something went wrong when deleting a game from the database!!", err: err}))
}