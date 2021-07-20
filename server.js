const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
// Allows for cross-origin requests, letting us talk from LH8000 to LH3000
app.use(cors());

// Establish connection to the database
require("./server/config/mongoose.config");
// We will definitely be handling post requests so we need some code for handling req.body
app.use(express.json(), express.urlencoded({extended: true}));

// DON'T FORGET TO BRING IN YOUR ROUTES WHEN YOU MAKE THEM
require("./server/routes/game.routes")(app);

app.listen(port, () => console.log(`Running on port ${port}!!`));