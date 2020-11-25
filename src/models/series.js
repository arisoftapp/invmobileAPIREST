let dbCOBOL = require('../dbMacro');
let model = {};

model.getSerie = async function(serie,codigo, callback) {
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
        //console.log(serie);
			dbCOBOL.base.query(`SELECT 
            SER_ALM AS 'almacen',
            SER_F_VEN AS 'Fventa'
                    FROM
                    PUBLIC.INVSER
                 WHERE SER_NUM='` + serie +`'
                 AND SER_ART='` + codigo +`'    
                 `, function(err, rows, moreResultSets) {
                if (err) {
                    //console.log(err);
                    callback(err);
                    //throw(err);
                }
                else {
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
model.getSeries = async function(codigo,almacen, callback) {
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
        //console.log(codigo);
        //console.log(almacen);
			dbCOBOL.base.query(`SELECT 
            SER_ALM AS 'almacen',
            SER_NUM AS 'serie'
                    FROM
                    PUBLIC.INVSER
                 WHERE SER_ART='` + codigo +`'   
                 AND SER_ALM='` + almacen +`' 
                 AND SER_F_VEN=null  
                 `, function(err, rows, moreResultSets) {
                if (err) {
                    //console.log(err);
                    callback(err);
                    //throw(err);
                }
                else {
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
module.exports = model;