const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const {listar, postar, editar, deletar} = require('../controller/controls')



router.get('/', listar)
router.post('/add', postar)
router.put('/edit/:id', editar)
router.delete('/delete/:id', deletar)

module.exports = router