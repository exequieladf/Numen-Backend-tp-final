const express = require('express')
const axios = require('axios')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {validarID} = require('../middlewares/validarID')
const checks = require('../middlewares/checks')
const { validarChecks } = require('../middlewares/validarChecks')

router.get('/ver', apiController.ver )
router.get('/buscar/id/:id', validarID , apiController.buscarSegunId)

router.get('/external', apiController.external)


router.post('/crear',checks, validarChecks, apiController.crear )
router.put('/editar/id/:id',validarID, checks, validarChecks ,apiController.editar )
router.delete('/eliminar/id/:id',validarID, apiController.eliminar )

  module.exports = router