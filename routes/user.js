
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.index = function(req, res){
  res.render('index', { title: 'About | David Zhu' });
};

exports.projects = function(req, res){
  res.render('projects', { title: 'Projects | David Zhu' });
};

exports.blog = function(req, res){
  res.render('blog', { title: 'Blog | David Zhu' });
};