var odbc = require("odbc");
var connectionString = "DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";
//var connectionString = "DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";	
var db = new odbc.Database();
let exp = {};
exp.abrir = () => {
	db.open(connectionString, function(err){
		if(err){
			console.log('SERVIDOR MACROPRO NO RESPONDE - VERIFIQUE QUE ESTE ENCENDIDO');
			
			throw err;
		}
		else
		{
			//callback(null,true);
			console.log("open abierta");
		}
	});
	
}
db.open(connectionString, function(err){
	if(err){
		console.log('SERVIDOR MACROPRO NO RESPONDE - VERIFIQUE QUE ESTE ENCENDIDO');
		
		throw err;
	}
	else
	{
		//callback(null,true);
		console.log("open abierta");
	}
});
//setTimeout(function() { console.log('Blah '+db.connected);db.close()}, 10000);
process.on('SIGINT', function () {
	db.close(function(){
		console.log('Database Connection Closed');
		process.exit();
	});
});

module.exports = {
	conexion:exp,
	base:db};