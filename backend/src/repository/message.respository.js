const Message = require("../models/message.model");

class MessageRepository{

    async create(data) {
        try {
            const message = await Message.create(data);
            return message;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const messages = await Message.find();
            return messages;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const message = await Message.findById(id);
            return message;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response = await Message.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console,log(error);
        }
    }

    async update(messageId, data) {
        try {
            const response = Message.findByIdAndUpdate(messageId, data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = MessageRepository;