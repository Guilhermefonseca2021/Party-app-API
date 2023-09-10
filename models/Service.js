const mongoose = require('mongoose')

// objeto do MoongoDB;
const { Schema } = mongoose;

<<<<<<< HEAD
const ServiceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    // controla data de criacao e atualizacao
}, { timestamps: true } 
);

// fazer ordenacao dos registros, nome do model e o que ordena
const Service = mongoose.model('Service', ServiceSchema)

module.exports = {
    Service,
    ServiceSchema,
};
=======
const serviceSchema = new Schema({
    name: {
        type: String,
       
    },
    description: {
        type: String,
 
    },
    price: {
        type: Number,
 
    },
    image: {
        type: String,
   
    },
    // controla data de criacao e atualizacao
    }, 
    { timestamps: true } 
);

// fazer ordenacao dos registros, nome do model e o que ordena
const Service = mongoose.model('Service', serviceSchema)

module.exports = { Service, serviceSchema};
>>>>>>> d06a9da (back end UPDATED)
