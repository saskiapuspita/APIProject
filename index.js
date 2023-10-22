require('dotenv').config()

const PORT = process.env.PORT || 5000;

const express = require('express');

const usersRoutes = require('./routes/users.js');

const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

//create middleware - middleware pasti dilewati ketika request masuk, sehingga dalam middleware dapat dimasukkan pengecekan pengecekan yang diperlukan
//middleware 1
app.use(middlewareLogRequest);

app.use(express.json());
//express routing 
//app.method(path, handler);
//method use is a midleware to handle http method

app.use('/users', usersRoutes);

// For pool initialization, see above
app.use('/', (req, res) => {
    dbPool.execute("SELECT * FROM users", function(err, rows) {
        // Connection is automatically released when query resolves
        if (err) {
            res.json({
                message: 'connection failed',
            })
        }
    
        res.json({
            message: 'connection success',
            data: rows,
        })
      });
})


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