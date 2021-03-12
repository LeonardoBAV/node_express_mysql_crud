var mysql = require('mysql');

var connection = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'scancode',
		password : 'scancode',
		database : 'node'
	});
}

module.exports = function () {
	return connection;
}