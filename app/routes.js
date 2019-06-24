var User = require('./models/user');
var UserController = require('./controllers/UserController.js');

module.exports = routesFunc;

function routesFunc(app) {

	app.get('/api/users', UserController.getUsers);
	app.get('/api/save', UserController.addUser);


	app.get('*', function(req,res) {
		res.sendFile('index.html',{root:'./public/views/'});
	});
}