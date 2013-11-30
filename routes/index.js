
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('./views/home.html')
  //res.render('index', { title: 'Where are you ??' });
};