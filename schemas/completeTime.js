const mongoose = require('mongoose');

const completeTimeSchema = new mongoose.Schema({
    completeTime: String,
});

module.exports = mongoose.model('complete_time',completeTimeSchema);