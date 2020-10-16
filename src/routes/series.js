const series = require('../models/series');

module.exports = function(app) {
    app.get('/serie/:serie/:codigo', (req, res) => {
        let serie = req.params.serie;
        let codigo = req.params.codigo;
        series.getSerie(serie,codigo,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar series:' + err
                });

            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro series"
                    });
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        respuesta: data,
                    });
                }
            }

        });
    });
    app.get('/series/:codigo/:idalmacen', (req, res) => {
        let idalmacen = req.params.idalmacen;
        let codigo = req.params.codigo;
        series.getSeries(codigo,idalmacen,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar series:' + err
                });

            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro series"
                    });
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        respuesta: data,
                    });
                }
            }

        });
    });

}