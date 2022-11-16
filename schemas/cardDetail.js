const mongoose = require('mongoose');

const cardDetailSchema = new mongoose.Schema({
    cardId: String,
    cardName: String,
    cardDescription: String,
    startTime: String,
    stopTime: String,
    totalTime: String
});

module.exports = mongoose.model('card_detail',cardDetailSchema);