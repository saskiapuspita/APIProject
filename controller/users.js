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

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'CREATE new user success',
        data: req.body,
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log('idUser: ', id);
    res.json({
        message: 'Update user success',
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: id,
            name: "Saskia Puspita",
            email: "dewsaski@gmail.com",
            address: "Malang",
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}