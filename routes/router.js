const router = require('express').Router()

//  Services Router
const servicesRouter = require('./services')

// todas rotas apartir de / vai vir do servico
router.use('/', servicesRouter)

module.exports = router;