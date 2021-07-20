// bring in the controls from the controller
const GameController = require("../controllers/game.controller");

module.exports = app => {
    // CREATE
    app.post("/api/games/create", GameController.createGame);
    // READ ALL
    app.get("/api/games", GameController.findAllGames);
    // READ ONE
    app.get("/api/games/:_id", GameController.findOneGame);
    // UPDATE
    app.put("/api/games/update/:_id", GameController.updateGame);
    // DELETE
    app.delete("/api/games/delete/:_id", GameController.deleteGame);
}