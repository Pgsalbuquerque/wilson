const express = require('express');
const routes = require('./routes');
//const cors = require('cors');

require('./database/index');

const server = express()

server.use(express.json())

server.use(routes);

server.listen(3333)

console.log("servidor rodando")

module.exports = server;