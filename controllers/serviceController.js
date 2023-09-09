const { response } = require('express');
const { Service: ServiceModel} = require('../models/Service')

// todas funcionalidades(informacoes) que passo ao front end 
const serviceController = {
    create: async(request, response) => {
        try {
            const service = {
                name: request.body.name.description, 
                description: request.body.price,
                price: request.body.price,
                image: request.body.image,
            };

            const response = await ServiceModel.create(service)

            response.json({response, msg: 'Servico criado com sucesso!'})
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = serviceController;