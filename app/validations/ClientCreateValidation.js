const { body, validationResult } = require('express-validator')

const clientCreateRules = () => {
    return [
        body('name').notEmpty().withMessage('Nome é obrigatório'),
        body('cpf').notEmpty().withMessage('Cpf é obrigatório'),
        body('email').notEmpty().withMessage('Email é obrigatório').isEmail().withMessage('Email tem de estar num formato de email válido'),
        body('age').isInt().withMessage('Idade tem que ser um número inteiro')
    ]
}

const clientCreateValidate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    return res.render('clients/create', { errors: errors.array(), client_form: req.body });
}

module.exports = {
    clientCreateRules,
    clientCreateValidate,
}