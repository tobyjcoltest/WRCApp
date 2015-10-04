var mysql = require('./dbConnectionsController');
var bcrypt = require('./bCrypt');
function encryptPassword(pwd)
{
	//var bcrypt = require('bcryptjs');
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(pwd, salt);	
	return hash;
}
exports.employer = function(req, res){
	console.log("here.");
	res.render('eregister');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
};



exports.newEmployer = function(req, res){
	var json = {};
	json.FirstName = req.body.fname;
	json.MiddleName = req.body.mname;
	json.LastName = req.body.lname;
	json.Company = req.body.company;		
	json.Address1 = req.body.address1;
	json.Address2 = req.body.address2;
	json.City = req.body.city;
	json.State = req.body.state;
	json.Zip = req.body.zip;
	json.Phone = req.body.phone;
	json.Email = req.body.email;
	json.DriverLicense=req.body.dlid;
	json.EmployerID="";
	//json.UserName=req.body.userid;
	//json.Password=req.body.password;
		UserName=req.body.userid;
		Password=req.body.password;
	employer.newEmployer(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res, json,UserName,Password);
};
 

exports.editEmployer=function(req, res){
	var json = {};
	json.FirstName = req.body.fname;
	json.MiddleName = req.body.mname;
	json.LastName = req.body.lname;
	json.Company = req.body.company;		
	json.Address1 = req.body.address1;
	json.Address2 = req.body.address2;
	json.City = req.body.city;
	json.State = req.body.state;
	json.Zip = req.body.zip;
	json.Phone = req.body.phone;
	json.Email = req.body.email;
	json.DriverLicense=req.body.dlid;
	json.EmployerID="";
	employer.editEmployer(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res, json);
};


exports.deleteEmployer=function(req, res){
	var EmployerID=req.body.EmployerID;
	employer.deleteEmployer(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res, EmployerID);
};

exports.getEmployers = function(req, res){
	employer.getEmployers( function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("Success!!");
			res.render('someWebpage');
		}
	},res);
}