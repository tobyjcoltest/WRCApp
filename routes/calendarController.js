var worker = require('../DAO/worker');
var employer=require('../DAO/employer');
var calendar=require('../DAO/calendar');
exports.getJobDescription=function(req,res){	
	var id=req.param("id");
	console.log("in: "+id);
	calendar.getJobDescription(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res,id);
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

exports.getCalendarView=function(req,res){
	
	calendar.getCalendarView(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res);
};
exports.employer = function(req, res){
	console.log("here.");
	res.render('eregister');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
};
exports.showCalendar = function(req, res){
	res.render('calendar');
	// res.send("Welcome to my NodeJS App. We're going Old School!!");
};
exports.renderEvents=function(req,res){
	//console.log(req.param("id"));
	var date=parseInt(req.param("id"));
	var d=new Date(date);
//	console.log(d);
	calendar.getEvents(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res,d);

};