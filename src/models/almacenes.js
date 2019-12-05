let dbCOBOL = require('../dbMacro');
let almacenModel = {};

almacenModel.getAlmacenes = (callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        ALM_LLAVE AS 'idalmacen',
        ALM_NOMBRE AS 'almacen'
                 FROM
                 PUBLIC.INVALM`, function(err, rows) {
            if (err) {
                //console.log(err);
                callback(err, null);
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
};
module.exports = almacenModel;