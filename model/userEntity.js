var mongoose = require('mongoose')
, Schema = mongoose.Schema;


var UserSchema = new Schema({
	username : {
		type : String
	},
	email : {
		type : String
	},
	password : {
		type : String,
		default : ''
	},
	website : {
		type : String,
		default : ''
	},
	created : {
		type : Date,
		default : Date.now
	},
	country : {
		type :String,
		default : ''
	}
});

module.exports = mongoose.model('User', UserSchema);