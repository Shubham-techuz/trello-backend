const mongoose = require('mongoose');

const completeTimeSchema = new mongoose.Schema({
    cardId: String,
    completeTime: String
});

module.exports = mongoose.model('complete_time',completeTimeSchema);