const clf = require('../models/clasificaciones');

module.exports = function(app) {
    app.get('/clasificaciones', async function(req, res) {
        clf.getClf((err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar clasificaciones:' + err
                });
                process.exit(0);
                //throw err;
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
    app.get('/conteoclf/:idalmacen/:clf', async function(req, res) {
        let idalmacen = req.params.idalmacen;
        let clas = req.params.clf;
        let result;
    try {
        if(dbCOBOL.base.connected==false)
        {
            result = await dbCOBOL.conexion.abrir(); 
        }
        else
        {
            result=true;
        }
        
    } catch (error) {
        result=false;
        console.log(error);
    }
        clf.getConteoClf(idalmacen,clas,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar clasificaciones:' + err
                    
                });
                process.exit(0);
                //throw err;

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
                        datos: data,
                    });
                }
            }

        });
    });
    app.get('/conteoclfnivel/:idalmacen/:clf', async function(req, res) {
        let idalmacen = req.params.idalmacen;
        let clas = req.params.clf;
      // console.log(req.body);
      let result;
      try {
          if(dbCOBOL.base.connected==false)
          {
              result = await dbCOBOL.conexion.abrir(); 
          }
          else
          {
              result=true;
          }
          
      } catch (error) {
          result=false;
          console.log(error);
      }
        clf.getConteoClfNivel(idalmacen,clas,(err, data) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: 'Error al consultar clasificaciones:' + err
                    
                });
                //throw err;
                process.exit(0);
            } else {
                if (data.length < 1) {
                    res.json({
                        success: false,
                        mensaje: "No encontro clasificaciones"
                    });
                } else {
                    res.json({
                        success: true,
                        length:data.length,
                        mensaje: "¡Consulta con exito!",
                        datos: data,
                    });
                }
            }

        });
    });
}