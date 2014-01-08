
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Malharhak', env: (process.env.NODE_ENV) ? process.env.NODE_ENV: "development"});
};