const { v4: uuidv4 } = require('uuid');

const dbPool = require('../config/database');


const newId = uuidv4();

const dateTime = new Date();

const generateDatabaseDateTime = (date) => {
    return date.toISOString().replace("T"," ").substring(0, 19);
  }

const getAllArticles = () => {
    const SQLQuery = 'SELECT * FROM articles';
    return dbPool.execute(SQLQuery);
}

const createNewArticle = (body) => {
    console.log(dateTime);
    console.log(generateDatabaseDateTime(dateTime));
    const SQLQuery = `INSERT INTO articles (articleId, content, category, isPublished, createdDate)
                        VALUES ('${newId}', '${body.content}', '${body.category}', '${body.isPublished}', '${generateDatabaseDateTime(dateTime)}')`;

    return dbPool.execute(SQLQuery);
}

const updateArticle = (body, id) => {
    const SQLQuery = `UPDATE articles SET content='${body.content}', category='${body.category}', isPublished='${body.isPublished}', updatedDate='${generateDatabaseDateTime(dateTime)}' 
                        WHERE articleId='${id}'`;

    return dbPool.execute(SQLQuery);
}

const deleteArticle = (id) => {
    const SQLQuery = `DELETE FROM articles WHERE articleId='${id}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllArticles,
    createNewArticle,
    updateArticle,
    deleteArticle,
}