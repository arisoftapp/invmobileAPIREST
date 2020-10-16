let dbCOBOL = require('../dbMacro');
let clfModel = {};

clfModel.getClf = (callback) => {
    if (dbCOBOL.base.connected==true) {
        dbCOBOL.base.query(`SELECT 
        CLF_LLAVE AS 'id_clf',
        CLF_DESC AS 'descripcion',
        CLF_NIV AS 'nivel'
                 FROM
                 PUBLIC.INVCLF`, function(err, rows) {
            if (err) {
                //console.log(err);
                callback(err, null);
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
    else
    {
        dbCOBOL.conexion.abrir();
        callback("conexion cerrada, intentar de nuevo",null);
    }
};
clfModel.getConteoClf = (idalmacen,clf,callback) => {
    console.log(idalmacen+" "+clf);
    if (dbCOBOL.base.connected==true) {
        dbCOBOL.base.query(`SELECT 
        c.ART_COD1 as 'codigo',
        c.ART_COD2 as 'codigo2',
        c.ART_DESC1 AS 'descripcion',
        c.ART_SER AS 'serie',
        c.ART_CLF AS 'clasificacion',
        a.EXI_ACT as 'existenciaActual'
                FROM
                PUBLIC.INVEXI AS a
                    INNER JOIN
                PUBLIC.INVALM AS b ON a.EXI_ALM = b.ALM_LLAVE
                    INNER JOIN
                PUBLIC.INVART AS c ON a.EXI_ART = c.ART_COD1
             WHERE a.EXI_ALM='` + idalmacen +`' 
             AND c.ART_CLF='` + clf +`'
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
    else
    {
        dbCOBOL.conexion.abrir();
        callback("conexion cerrada, intentar de nuevo",null);
    }
};
clfModel.getConteoClfNivel = (idalmacen,clf,callback) => {
    console.log(idalmacen+" "+clf.length);
    if (dbCOBOL.base.connected==true) {
        dbCOBOL.base.query(`SELECT 
        c.ART_COD1 as 'codigo',
        c.ART_COD2 as 'codigo2',
        c.ART_DESC1 AS 'descripcion',
        c.ART_SER AS 'serie',
        c.ART_CLF AS 'clasificacion',
        a.EXI_ACT as 'existenciaActual'
                FROM
                PUBLIC.INVEXI AS a
                    INNER JOIN
                PUBLIC.INVALM AS b ON a.EXI_ALM = b.ALM_LLAVE
                    INNER JOIN
                PUBLIC.INVART AS c ON a.EXI_ART = c.ART_COD1
             WHERE a.EXI_ALM='` + idalmacen +`' 
             AND substring(c.ART_CLF,1,'`+clf.length+`')='` + clf +`'
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
    else
    {
        dbCOBOL.conexion.abrir();
        callback("conexion cerrada, intentar de nuevo",null);
    }
};
module.exports = clfModel;