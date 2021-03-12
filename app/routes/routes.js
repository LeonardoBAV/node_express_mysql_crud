const { clientCreateRules, clientCreateValidate } = require('./../validations/ClientCreateValidation.js')
const { clientUpdateRules, clientUpdateValidate } = require('./../validations/ClientUpdateValidation.js')

module.exports = function (app) {

	app.get('/', function (req, res) {
		app.app.controllers.HomeController.index(app, req, res);
	});

	app.get('/clients', function (req, res) {
		app.app.controllers.ClientController.index(app, req, res);
	});

	app.get('/clients/create', function (req, res) {
		app.app.controllers.ClientController.create(app, req, res);
	});

	app.get('/clients/edit/:id', function (req, res) {
		app.app.controllers.ClientController.edit(app, req, res);
	});

	app.post('/clients/store', clientCreateRules(), clientCreateValidate,function (req, res) {
		app.app.controllers.ClientController.store(app, req, res);
	});

	app.post('/clients/update/:id', clientUpdateRules(), clientUpdateValidate, function (req, res) {
		app.app.controllers.ClientController.update(app, req, res);
	});

	app.post('/clients/destroy/:id', function (req, res) {
		app.app.controllers.ClientController.destroy(app, req, res);
	});

}