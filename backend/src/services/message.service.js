const MessageRepository = require("../repository/message.respository");

class UserSevice {

    constructor(){
        this.messageRepository = new MessageRepository();
    }

    async create(data) {
        try {
            const response = await this.messageRepository.create(data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            console.log('Something went wrong in sending ser message in servies');
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.messageRepository.getAll();
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            console.log('Something went wrong in getting all the user messages');
            throw error;
        }
    }

    async getById(id) {
        try {
            const response = await this.messageRepository.getById(id);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            console.log('Something went wrong in getting the user by ID inside service');
            throw error;
        }
    }

    async destroy(id) {
        try {
            const response = await this.messageRepository.destroy(id);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            console.log('Something went wrong in destroying the user by ID inside service');
            throw error;
        }
    }

    async update(id, data) {
        try {
            const response = await this.messageRepository.update(id, data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            console.log('Something went wrong in updating the message by ID inside service');
            throw error;
        }
    }

};

module.exports = UserSevice;