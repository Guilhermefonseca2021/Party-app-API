<<<<<<< HEAD
const { response } = require('express');
=======
// aqui onde ficar o cors(nossa logica pesada e regras ficam)
>>>>>>> d06a9da (back end UPDATED)
const { Service: ServiceModel} = require('../models/Service')

// todas funcionalidades(informacoes) que passo ao front end 
const serviceController = {
<<<<<<< HEAD
    create: async(request, response) => {
=======
    create: async(request, res) => {
>>>>>>> d06a9da (back end UPDATED)
        try {
            const service = {
                name: request.body.name.description, 
                description: request.body.price,
                price: request.body.price,
                image: request.body.image,
            };

<<<<<<< HEAD
            const response = await ServiceModel.create(service)

            response.status(201).json({response, msg: 'Servico criado com sucesso!'})
        } catch (error) {
            console.log(error)
        }
=======
            // no mongoose o metodo p criar registro no banco .create
            const response = await ServiceModel.create(service);

            res.status(201).json({ response, msg: 'Servico criado com sucesso!'})
        } catch (error) {
            console.log(error)
        }
    },
        getAll: async (req, res) => {
            try {
                const services = await ServiceModel.find()

                res.json(services);
            } catch (error) {
                console.log(error)
            }
    },

    get: async(req, res) => {
        try {

        } catch {

        }
>>>>>>> d06a9da (back end UPDATED)
    }
};

module.exports = serviceController;