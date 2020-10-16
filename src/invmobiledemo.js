const express = require('express');
const cors = require('cors');
const server = express();
//const jwt = require('jsonwebtoken');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');
let empresa = "demo";


server.use(cors({ credentials: true, origin: true }));
//settings
const port = process.env.PORT || 3011; //Puerto de VIP Cell
server.set('port', process.env.PORT || 3011);
//server.set('secret', config.secret);
//middleware
server.use(morgan('dev'));
server.use(bodyParser.json());
server.get('/reiniciar', (req, res) => {

        throw err;           
});
// Rutas
//require('./routes/authenticate')(server);
require('./routes/almacenes')(server);
require('./routes/conteo')(server);
require('./routes/series')(server);
require('./routes/guardarConteo')(server);
require('./routes/clasificaciones')(server);

server.listen(server.get('port'), () => {
    console.log(empresa + " Started successfuly in the port " + port);
});