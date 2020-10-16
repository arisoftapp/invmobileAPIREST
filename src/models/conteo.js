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
conteo.geteximacro2 = (idalmacen, codigoProducto, callback) => {
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
conteo.getsoloexiact = (idalmacen, codigoProducto, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
            EXI_ACT as 'existenciaActual',
            ART_SER AS 'serie'
                    FROM
                    PUBLIC.INVEXI, 
                    PUBLIC.INVART
                 WHERE 
                 PUBLIC.INVART.ART_COD1= '` + codigoProducto + `'
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
conteo.getsoloexiact2 = (idalmacen, codigoProducto, callback) => {
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
            EXI_ACT as 'existenciaActual',
            ART_SER AS 'serie'
                    FROM
                    PUBLIC.INVEXI, 
                    PUBLIC.INVART
                 WHERE 
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
conteo.getSoloExistencia = (idalmacen,callback) => {
    //console.log(idalmacen);
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
        c.ART_COD1 as 'codigo',
        c.ART_COD2 as 'codigo2',
        c.ART_DESC1 AS 'descripcion',
        c.ART_SER AS 'serie',
        a.EXI_ACT as 'existenciaActual'
                FROM
                PUBLIC.INVEXI AS a
                    INNER JOIN
                PUBLIC.INVALM AS b ON a.EXI_ALM = b.ALM_LLAVE
                    INNER JOIN
                PUBLIC.INVART AS c ON a.EXI_ART = c.ART_COD1
             WHERE a.EXI_ALM='` + idalmacen +`'
             AND a.EXI_ACT>0    
             `
                 , function(err, rows, moreResultSets) {
            if (err) {
                //console.log(err);
                callback(err, rows);
                throw err;
            }
            else {
                callback(null, rows);
            }
        }); 
    }
};
module.exports = conteo;