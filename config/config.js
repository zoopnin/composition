var path = require('path'), rootPath = path.normalize(__dirname + '/..');

module.exports = {
	development : {
		db : 'mongodb://composition:composition@127.0.0.1:27017/db_composition',
		root : rootPath,
		facebook : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		twitter : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		google : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		}
	},
	test : {
		db : '',
		root : rootPath,
		facebook : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		twitter : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		},
		google : {
			clientID : '',
			clientSecret : '',
			callbackURL : ''
		}
	},
	production : {}
};