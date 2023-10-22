const express = require('express');

const ArticleController = require('../controller/articles');

const router = express.Router();

router.get('/', ArticleController.getAllArticles);

router.post('/', ArticleController.createNewArticle);

router.patch('/:id', ArticleController.updateArticle);

router.delete('/:id', ArticleController.deleteArticle);

module.exports = router;