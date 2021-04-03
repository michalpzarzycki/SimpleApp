const express = require('express');
const path = require('path')
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

//express app
const app = express();
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use('/', routes)


//http server
const server = app.listen(PORT, () => {
    console.log(`server running on port ${server.address().port}`)
})