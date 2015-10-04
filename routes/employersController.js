var mysql = require('./dbConnectionsController');

exports.employers = function(json) {
//	if(cookiesHash.id == req.session.id){	
		var connection=mysql.getConnection();
		var query = connection.query("select * from EmployerInfo ",
				function(err, rows) {
			connection.end();
			if (err) {
				console.log(err);
				//cstmError.mySqlException(err, res);					
				//cstmError.throwException('Something went wrong.',res);
			} else {
				res.setHeader('Set-Cookie', req.session.id);
				res.send({res:rows});
			}
		});
	// }else{

	// }
};

exports.empRegister = function(callback, json) {	
//	if(cookiesHash.id == req.session.id){
		var connection=mysql.getConnection();
		
		var query = connection.query("INSERT INTO connections set ? ", json , function(err, r){
			if (err) {
				res.error=err;									
			} 
			else {		

				connection.query("select MAX(id) as id from WorkerInfo "), function(err, results){
					if(err){
						console.log("Sleep!!!");

					}else{

						connection.query("INSERT INTO UserSkills set ? ", {WorkerID: results, SkillID: json.SkillID} , function(err, rows){
							if (err) {
								res.error=err;									
							} 
							else {
								res.setHeader('Set-Cookie', req.session.id);
								res.send({"msg":"successfully inserted"});	
							}
						});
					}
				}	
			}
			connection.end();	
		});
	// }else{

//	}
}; 