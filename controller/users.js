const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;
    if (!body.name || !body.email || !body.email) {
        return res.status(400).json({
            message: 'Input not completed',
            data: null
        })
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {body} = req;
    const {id} = req.params;
    console.log('idUser: ', id);

    if (!body.name || !body.email || !body.email) {
        return res.status(400).json({
            message: 'Input not completed',
            data: null
        })
    }

    try {
        await UsersModel.updateUser(body, id);

        res.json({
            message: 'Update user success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await UsersModel.deleteUser(id);

        res.json({
                message: 'DELETE user success',
                data: null,
            })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}