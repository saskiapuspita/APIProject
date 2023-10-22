const ArticlesModel = require('../models/articles');

const getAllArticles = async (req, res) => {
    try {
        const [data] = await ArticlesModel.getAllArticles();

        res.json({
            message: 'GET all Articles success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const createNewArticle = async (req, res) => {
    const {body} = req;
    if (!body.content || !body.category || !body.isPublished) {
        return res.status(400).json({
            message: 'Input not completed',
            data: null
        })
    }

    try {
        await ArticlesModel.createNewArticle(body);
        res.status(201).json({
            message: 'CREATE new article success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const updateArticle = async (req, res) => {
    const {body} = req;
    const {id} = req.params;
    console.log('articleId: ', id);

    if (!body.content || !body.category || !body.isPublished) {
        return res.status(400).json({
            message: 'Input not completed',
            data: null
        })
    }

    try {
        await ArticlesModel.updateArticle(body, id);

        res.json({
            message: 'Update article success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const deleteArticle = async (req, res) => {
    const {id} = req.params;
    try {
        await ArticlesModel.deleteArticle(id);

        res.json({
                message: 'DELETE article success',
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
    getAllArticles,
    createNewArticle,
    updateArticle,
    deleteArticle,
}