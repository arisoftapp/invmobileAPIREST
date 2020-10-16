let clfModel = {};
var db = require('odbc')()
  , cn ="DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";
  ;


clfModel.getClf = (callback) => {
    db.open(cn, function (err) {
        if (err) {
            //callback(err,null);
             console.log(err);
        }
        else
        {
            callback(null,"true");
        }
        
        //we now have an open connection to the database
    });
    
 
   
    /*
    if (dbCOBOL) {
        dbCOBOL.query(`SELECT 
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
    */
};

module.exports = clfModel;