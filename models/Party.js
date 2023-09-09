const mongoose = require('mongoose')
const { Schema } = mongoose

// validacao de dados que criamos
const {serviceSchema} = require('./Service')

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
}, {timestamps: true})

// fazer ordenacao dos registros, nome do model e o que ordena
const Party = mongoose.model('Party', partySchema)

module.exports = Party;
