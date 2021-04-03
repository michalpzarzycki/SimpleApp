const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('./models/Registration')
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
    console.log("MONGOOSE CONNECTED")
}).on('error', () => {
    console.log("ERROR MONGOOSE")
})

//express app
const app = express();
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}));
app.use('/', routes)


//http server
const server = app.listen(PORT, () => {
    console.log(`server running on port ${server.address().port}`)
})