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

exports.getCalendarView=function(req,res){
	
	calendar.getCalendarView(function(err, result){
		if(err){
			console.log("Error: "+err);
		}else{
			console.log("NOTHING.");
		}
	},res);
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