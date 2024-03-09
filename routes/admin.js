const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {listar, listarId, postar, editar, deletar} = require('../controller/controls')



router.get('/', listar)
router.get('/:id', listarId)
router.post('/add', postar)
router.put('/edit/:id', editar)
router.delete('/delete/:id', deletar)

module.exports = router