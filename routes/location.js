
exports.index = function(req, res){
  res.render('location', { title: 'Where are you ??' });
};

exports.update = function(req, res){
var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '60589',
  key: 'a3b9815a5a174314966b',
  secret: '08db0f27a3aa31072ebe'
});

pusher.trigger(req.body.name, 'my_event', {
  "message":req.body.latlong
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : "way",
});

console.log(req.body.latlong)
console.log(req.body.username)

connection.connect(function(err) {
        if(!err){
        connection.query('SELECT * from users where username="' + req.body.username + '"', function(err, rows) {
	 
          console.log(rows.length);
			
        
        if (rows.length==0) {
           console.log('im here')
          connection.query('INSERT into users(username,name,last_seen_location) values ("' + req.body.username + '","' + req.body.name + '","' + req.body.latlong + '")', function(err, rows) {
          });
          }
          else{
                        
                connection.query('UPDATE users set last_seen_location="' + req.body.latlong + '" where username="' + req.body.username + '"', function(err, rows) {
                 //connection.query('UPDATE users set last_seen_location="11.23458577,70.12" where username="muthu"', function(err, rows) {

                        //console.log(rows);

                });
          }
          });
        } else
                console.log('failed')
                console.log(err);
        
});

/*pusher.trigger('test_channel', 'my_event', {
  "message":'12.975497,77.562940'
}); */

/*res.writeHead(200, {"Content-Type": "application/json"});
var ex = { message: "12.975497,77.562940"};
var json = JSON.stringify(ex);
res.end(json);*/

//res.render('location', { title: 'Where are you ??' });
res.send(200)

}

