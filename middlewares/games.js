const games = require('../models/game')

const findAllGames = async (req, res, next) => {
    req.gamesArray = await games.find({});
    console.log(req.gamesArray);
    next()
}

module.exports = findAllGames
