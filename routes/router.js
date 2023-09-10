<<<<<<< HEAD
=======
// canalizar nossas rotas para indicar de onde vem
>>>>>>> d06a9da (back end UPDATED)
const router = require('express').Router()

//  Services Router
const servicesRouter = require('./services')

// todas rotas apartir de / vai vir do servico
router.use('/', servicesRouter)

<<<<<<< HEAD
=======


>>>>>>> d06a9da (back end UPDATED)
module.exports = router;