const mongoose = require('mongoose');

const cardDetailSchema = new mongoose.Schema({
    userId: String,
    name: String,
    startTime: String,
    stopTime: String
});

module.exports = mongoose.model('card_detail',cardDetailSchema);