var User = require('../models/user');

exports.getUsers=function(req,res) {
	console.log("in get users");

	User.find({}, function(err,users) {
		if(err)
			throw err;
		res.json(users);
	});
}

exports.addUser = function(req,res) {
	console.log(" in add user");

	var newUser = User({
		firstName: "Sid",
		lastName:"Ven",
		username:"sid12345"
	});

	newUser.save(function(err){
		if(err)
			throw err;
		else {
			console.log("Saved successfully");
			User.find({}, function(err,users) {
			if(err)
				throw err;
			res.sendFile('user.html',{root:'./public/views/'});
			})
		}
		
		
	});

	
}
