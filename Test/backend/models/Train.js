const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainName: String,
    departureTime: Date,
    seatAvailability: {
        sleeper: Number,
        ac: Number
    },
    prices: {
        sleeper: Number,
        ac: Number
    }
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
