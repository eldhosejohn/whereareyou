

exports.update = function(req, res){
  var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '60589',
  key: 'a3b9815a5a174314966b',
  secret: '08db0f27a3aa31072ebe'
});

pusher.trigger('test_channel', 'my_event', {
  "message": req.body.name
});
    
}