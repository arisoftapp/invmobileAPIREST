var odbc = require("odbc");
var connectionString = "DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";
//var connectionString = "DSN=Macro;UID=system;PWD=manager;DATABASE=DEMOINT";	
var db = new odbc.Database();
let exp = {};
exp.abrir = async function () {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{resolve(false)},20000);
			 db.open(connectionString, (err)=>{
				if(err){
					 console.log('SERVIDOR MACROPRO NO RESPONDE - VERIFIQUE QUE ESTE ENCENDIDO');
					//throw err;
					resolve(false);
				}
				else
				{
					//callback(null,true);

					 console.log("open abierta");
					 resolve(true);
				}
				
			});
		  });
}
exp.cerrar=async function (){
	let promise;
	try {
		promise = new Promise((resolve, reject) => {
		
			db.close(function(){
				console.log('Database Connection Closed');
				
				promise=true;
				process.exit(0);
			});
		  });
	} catch (error) {
		console.log(error);
		promise=false;
	}
	
	return promise;
	
	
}
/*
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
*/
//setTimeout(function() { console.log('Blah '+db.connected);db.close()}, 10000);
process.on('SIGINT', function () {
	db.close(function(){
		console.log('Database Connection Closed SINGINT');
		process.exit();
	});
});

module.exports = {
	conexion:exp,
	base:db};