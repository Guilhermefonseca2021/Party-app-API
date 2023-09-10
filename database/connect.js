const mongoose = require('mongoose')

async function main() {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(
            `mongodb+srv://gsbloogs194:1FMwBznOo9HxB9HC@nodesystem.kyzz3ns.mongodb.net/?retryWrites=true&w=majority`
        )

        console.log('conectado ao banco')
    } catch(error) {
        console.log(`Error:  ${error}`)
    }  
}

<<<<<<< HEAD
module.exports = main
=======
module.exports = main;
>>>>>>> d06a9da (back end UPDATED)
