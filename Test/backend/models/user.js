const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    companyName: String,
    ownerName: String,
    rollNo: String,
    ownerEmail: String,
    accessCode: String
});

module.exports = mongoose.model('User', userSchema);
