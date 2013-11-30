
/*
 * GET users listing.
 */

exports.list = function(req, res){
      var response;
  	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : "way",
	});
	connection.connect(function(err) {
		if(!err){
			connection.query('SELECT * from users', function(err, rows) {
				console.log(rows);
  res.writeHead(200, {"Content-Type": "application/json"});
var json = JSON.stringify(rows);
console.log(json)
res.end(json);

			});
		} else
			console.log(err);
	// connected! (unless `err` is set)
	});
        
        
        

};

exports.locationscript = function(req,res){

	var Pusher = require('pusher');
	var pusher = new Pusher({
		appId: '60589',
		key: 'a3b9815a5a174314966b',
		secret: '08db0f27a3aa31072ebe'
	});

	var x= 12.975497;
	var y= 77.562940;
		for(var i=0;i<50;i++)
		{
			setTimeout(function() {
				y = y+0.01;
				pusher.trigger('test_channel', 'my_event', {
			"message":x+','+y
		}); 
			},2000);
		}
	console.log("done");
};

exports.create = function(req, res){
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : "way",
	});
	connection.connect(function(err) {
		if(!err){
			connection.query('SELECT * from users', function(err, rows) {
				console.log(rows);
			});
		} else
			console.log(err);
	// connected! (unless `err` is set)
	});
};