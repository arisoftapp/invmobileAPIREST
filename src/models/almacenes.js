let dbCOBOL = require('../dbMacro');
let almacenModel = {};

almacenModel.getAlmacenes = async function(callback){
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
    if (result==true) {
        dbCOBOL.base.query(`SELECT 
        ALM_LLAVE AS 'idalmacen',
        ALM_NOMBRE AS 'almacen'
                 FROM
                 PUBLIC.INVALM`, function(err, rows) {
            if (err) {
                //console.log(err);
                callback(err, null);
                //throw err;
            } else {
                callback(null, rows);
            }
        });
    }
    else
    {
        //dbCOBOL.conexion.abrir();
        callback("conexion cerrada, intentar de nuevo",null);
    }
};
module.exports = almacenModel;