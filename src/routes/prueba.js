
const clf = require('../models/prueba');
module.exports = function(app) {
    app.get('/clfprueba', (req, res) => {
        clf.getClf((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar clasificaciones:' + err
                });
                throw err;
            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro clasificaciones"
                    });
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        clasificaciones: data,
                    });
                }
            }

        });
    });
}