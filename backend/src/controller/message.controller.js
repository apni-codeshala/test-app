const MessageService = require('../services/message.service');

const messageService = new MessageService();

const create = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        const response = await messageService.create({name, email, message});
        console.log(response);
        return res.status(200).json({
            success: true,
            message: "Message created successfully",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log("Something went wrong inside message controller, in creating message");
        return res.status(400).json({
            success: false,
            message: "Message was not create",
            data: {},
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await messageService.getAll();
        console.log(response);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'Getting all the message successfully'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Something went wrong in getting all the messages',
            data: {},
            success: false,
            err: error
        });
    }
}

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await messageService.getById(id);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'Get the message by ID'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong in getting the meesage by ID',
            data: {},
            success: false,
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await messageService.destroy(id);
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'Deleted the message by ID'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong in deleting the message by ID',
            data: {},
            success: false,
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const id = req.body.id;
        const message = req.body.message;
        const response = await messageService.update(id, {message});
        return res.status(200).json({
            success: true,
            err: {},
            data: response,
            message: 'Updated the message by ID'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong in updating the message by ID',
            data: {},
            success: false,
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
    getById,
    destroy,
    update
}