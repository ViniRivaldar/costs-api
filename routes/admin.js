const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {listar, listarCategorias, listarId, postar, editar, deletar} = require('../controller/controls')



router.get('/', listar)
router.get('/categories', listarCategorias)
router.get('/:id', listarId)
router.post('/add', postar)
router.put('/edit/:id', editar)
router.delete('/delete/:id', deletar)

module.exports = router