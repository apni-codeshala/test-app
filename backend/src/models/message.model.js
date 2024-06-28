const mongoose = require("mongoose");

const messageScehema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
}, {timestamps: true})

const Message = mongoose.model('Message', messageScehema);

module.exports = Message;