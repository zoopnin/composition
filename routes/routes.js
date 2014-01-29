exports.requestRoutes = function(app){
	var main = require('../controller/index');
	
	var user = require('../controller/userController');
	var blog = require('../controller/blogController');
	
	app.get('/',main.index) ;
	
	app.get('/:name/dashboard',user.main);
	
	app.get('/users',user.list);
	app.get('/user/:name',user.findByUsername);
	app.post('/user-add',user.save);
	app.post('/user-login',user.login);
	
	app.get('/blog/add',blog.addBlog) ;
	app.get('/blog/filter/:author',blog.findByName);
};