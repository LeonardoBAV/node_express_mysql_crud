function Client(app){
    this._connection = app.connection();
}

Client.prototype.load = function(callback){
	this._connection.query('SELECT * FROM clients', callback);
}

Client.prototype.loadById = function(id, callback){
	this._connection.query('SELECT * FROM clients WHERE id = ?', id, callback);
}

Client.prototype.create = function(client, callback){
	this._connection.query('INSERT INTO clients SET ? ', client, callback);
}

Client.prototype.update = function(client, callback){
	this._connection.query('UPDATE clients SET ? WHERE id = ?', [client, client.id] , callback);
}

Client.prototype.delete = function(id, callback){
	this._connection.query('DELETE FROM clients WHERE id = ?', id, callback);
}

module.exports = function(){
    return Client;
}