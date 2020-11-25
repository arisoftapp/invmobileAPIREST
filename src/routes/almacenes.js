const almacenes = require('../models/almacenes');

module.exports = function(app) {
    app.get('/almacenes', (req, res) => {
        almacenes.getAlmacenes((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar almacenes:' + err
                });
                //console.log(err);
                //throw err;
                process.exit(0);
            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro almacenes"
                    });
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        almacenes: data,
                    });
                }
            }

        });
    });

}