const conteo = require('../models/conteo');

module.exports = function(app) {
    app.get('/conteo/:idalmacen/:codigo', (req, res) => {
        let idalmacen = req.params.idalmacen;
        let codigo = req.params.codigo;
        conteo.geteximacro(idalmacen, codigo, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al consultar codigo:' + err
                });
                process.exit(0);

            } else {
                if (data.length < 1) {
                    conteo.geteximacro2(idalmacen,codigo,(err2,data2)=>{
                        if(err){
                            res.status(500).send({
                                success: false,
                                mensaje: 'Error al consultar codigo:' + err2
                            });
                        }
                        else{
                            if(data2.length<1)
                            {
                                res.json({
                                    success: false,
                                    mensaje: "No encontro codigo"
                                });
                            }
                            else
                            {
                                res.json({
                                    success: true,
                                    mensaje: "¡Consulta con exito!",
                                    datos: data2,
                                });
                            }
                        }
                    });
    
      
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        datos: data,
                    });
                }
            }

        });
    });
    app.get('/soloexistencia/:idalmacen/:codigo', (req, res) => {
        let idalmacen = req.params.idalmacen;
        let codigo = req.params.codigo;
        conteo.getsoloexiact(idalmacen, codigo, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al consultar existencia:' + err
                });
                process.exit(0);

            } else {
                if (data.length < 1) {
                    conteo.getsoloexiact2(idalmacen,codigo,(err2,data2)=>{
                        if(err){
                            res.status(500).send({
                                success: false,
                                mensaje: 'Error al consultar codigo:' + err2
                            });
                        }
                        else{
                            if(data2.length<1)
                            {
                                res.json({
                                    success: false,
                                    mensaje: "No encontro codigo"
                                });
                            }
                            else
                            {
                                res.json({
                                    success: true,
                                    mensaje: "¡Consulta con exito!",
                                    datos: data2,
                                });
                            }
                        }
                    });
    
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        datos: data,
                    });
                }
            }

        });
    });
    app.get('/existenciatotal/:idalmacen', (req, res) => {
        let idalmacen = req.params.idalmacen;
        conteo.getSoloExistencia(idalmacen, (err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    mensaje: 'Error al consultar existencia:' + err
                });
                process.exit(0);

            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro codigo"
                    });
                } else {
                    res.json({
                        success: true,
                        mensaje: "¡Consulta con exito!",
                        datos: data,
                    });
                }
            }

        });
    });

}