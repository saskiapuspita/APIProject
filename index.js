require('dotenv').config()

const PORT = process.env.PORT || 5000;

const express = require('express');

const usersRoutes = require('./routes/users.js');

const articlesRoutes = require('./routes/articles.js');

const middlewareLogRequest = require('./middleware/logs.js');

const upload = require('./middleware/multer.js');

const app = express();

//create middleware - middleware pasti dilewati ketika request masuk, sehingga dalam middleware dapat dimasukkan pengecekan pengecekan yang diperlukan
//middleware 1
app.use(middlewareLogRequest);

app.use(express.json());

app.use('/assets', express.static('public/images'));

app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Upload berhasil',
    })
});

app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
});

//express routing 
//app.method(path, handler);
//method use is a midleware to handle http method

app.use('/users', usersRoutes);

app.use('/articles', articlesRoutes);

app.get("/", (req, res) => {
    res.json({
        name: 'Saskia Amalia P',
        email: 'dewsaski@gmail.com'
    })
});

app.post("/", (req, res) => {
    res.send('Hello Post Method');
});

app.listen (PORT, () => {
    console.log(`Running on Server Port: ${PORT}`);
});