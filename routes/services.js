const router = require('express').Router()

const { request, response } = require('express');
const serviceController = require('../controllers/serviceController')

//  Funcoes 
//  criacao de post para services (dados para o banco)
router
    .route('/services')
    .post((request, response) => serviceController.create(request, response))

module.exports = router;