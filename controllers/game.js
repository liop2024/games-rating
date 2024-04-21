const fs = require("fs");
const { getRandomGame } = require("../appModules/api");
async function gameRouteController(res) {
    fs.readFile("./dataset/rating.json", (err, ratingFile) => {
        if (err) {
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
        const data = JSON.parse(ratingFile);
        let game = getRandomGame(data);
        const game = data[0];
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(game));
    });
}

module.exports = gameRouteController;
