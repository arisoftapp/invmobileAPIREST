let dbCOBOL = require('../dbMacro');
let conteo = {};
conteo.geteximacro = (idalmacen, codigoProducto, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
            ART_COD1 as 'codigo',
            ART_COD2 as 'codigo2',
            ART_DESC1 AS 'descripcion',
            ART_SER AS 'serie',
            EXI_ACT as 'existenciaActual'
                    FROM
                    PUBLIC.INVEXI, 
                    PUBLIC.INVART
                 WHERE 
                 PUBLIC.INVART.ART_COD1= '` + codigoProducto + `'
                 AND PUBLIC.INVEXI.EXI_ART=ART_COD1
                 AND PUBLIC.INVEXI.EXI_ALM='` + idalmacen + `'
                 OR
                 PUBLIC.INVART.ART_COD2= '` + codigoProducto + `'
                 AND PUBLIC.INVEXI.EXI_ART=ART_COD1
                 AND PUBLIC.INVEXI.EXI_ALM='` + idalmacen + `'
                 `, function(err, rows, moreResultSets) {
            if (err) {
                //console.log(err);
                callback(err, rows);
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
};

module.exports = conteo;