module.exports.index = function (app, req, res) {
    (new app.app.models.Client(app)).load(function (error, result) {
        res.render('clients/index', { clients: result });
    });
}

module.exports.create = function (app, req, res) {
    res.render('clients/create', {errors: [], client_form: {}});
}

module.exports.edit = function (app, req, res) {
    (new app.app.models.Client(app)).loadById(req.params.id, function (error, result) {
        res.render('clients/edit', {errors: [], client_form: result[0]});
    });
}

module.exports.store = function (app, req, res) {
    (new app.app.models.Client(app)).create(req.body, function (error, result) {
        res.redirect('/clients');
    });
}

module.exports.update = function (app, req, res) {
    (new app.app.models.Client(app)).update(req.body, function (error, result) {
        console.log(error);
        res.redirect('/clients');
    });
}

module.exports.destroy = function (app, req, res) {
    (new app.app.models.Client(app)).delete(req.params.id, function (error, result) {
        res.redirect('/clients');
    });
}

