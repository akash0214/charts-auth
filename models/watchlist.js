const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true,
    },
    stocks: [{
        type: String,
    }]
});

module.exports = mongoose.model("watchlist", watchlistSchema);