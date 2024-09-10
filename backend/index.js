const express = require('express');
const connectDb = require('./connection');
const router = require('./routes/auth');

const app = express();
const PORT = 8000;

connectDb();

app.use(express.json());

app.use('/api/auth', router);

app.listen(PORT, ()=>{ 
    console.log(`Server Started on ${PORT}`)
});