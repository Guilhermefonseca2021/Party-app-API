<<<<<<< HEAD
const mongoose = require('mongoose')
const { Schema } = mongoose

// validacao de dados que criamos
const {serviceSchema} = require('./Service')
=======
const mongoose = require('mongoose');
const { Schema } = mongoose;

// validacao de dados que criamos
const { serviceSchema } = require('./Service')
>>>>>>> d06a9da (back end UPDATED)

const partySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    services: {
        type: [serviceSchema],
        required: true,
    },
    // controla data de criacao e atualizacao
<<<<<<< HEAD
}, {timestamps: true})
=======
    }, 
    {timestamps: true}
)
>>>>>>> d06a9da (back end UPDATED)

// fazer ordenacao dos registros, nome do model e o que ordena
const Party = mongoose.model('Party', partySchema)

module.exports = Party;
