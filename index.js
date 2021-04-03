const express = require('express');
const routes = require('./routes')
const PORT = process.env.PORT || 3000;

//express app
const app = express();
app.use('/', routes)


//http server
const server = app.listen(PORT, () => {
    console.log(`server running on port ${server.address().port}`)
})