const express = require('express');
const cors = require('cors');
const server = express();
//const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');

server.use(cors({ credentials: true, origin: true }));
//settings
const port = process.env.PORT || 3010; //Puerto de VIP Cell
server.set('port', process.env.PORT || 3010);
//server.set('secret', config.secret);
//middleware
server.use(morgan('dev'));
server.use(bodyParser.json());
// Rutas
//require('./routes/authenticate')(server);


server.listen(server.get('port'), () => {
    console.log("VIPCell-WS Started successfuly in the port 3002");
});