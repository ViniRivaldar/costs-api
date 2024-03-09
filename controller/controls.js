const mongoose = require('mongoose');
const {Projeto, Categories} = require('../modules/Projeto');

const listar = async (req, res) => {
    try {
        const projetos = await Projeto.find({});
        res.json({ projetos });
    } catch (error) {
        console.log(`erro de: ${error}`);
        res.status(500).send("erro no servidor");
    }
};

const listarId= async (req, res) => {
    const { id } = req.params;
    try {
        const projeto = await Projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ mensagem: 'Projeto não encontrado' });
        }
        res.json({ projeto });
    } catch (error) {
        console.log(`erro de: ${error}`);
        res.status(500).send("erro no servidor");
    }
};

const listarCategorias = async (req, res) => {
    try {
        const categorias = await Categories.find({});
        res.json(categorias);
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao buscar categorias");
    }
}


const postar = async (req, res) => {
    const projeto = new Projeto({
        name: req.body.name,
        budget: req.body.budget,
        category: req.body.category
    });

    try {
        await projeto.save();
        res.status(201).send({ projeto });
    } catch (error) {
        console.log(`deu erro de: ${error}`);
        res.status(400).send("erro ao enviar");
    }
};

const editar = async (req, res) => {
    try {
        const { name, budget, category } = req.body;
        const editarprojeto = { name, budget, category };

        await Projeto.findByIdAndUpdate(req.params.id, editarprojeto);
        const projetos = await Projeto.find({});
        res.status(201).send({ projetos });
    } catch (error) {
        console.log(`erro de: ${error}`);
        res.status(500).send("ao editar o projeto");
    }
};

const deletar = async (req, res) => {
    try {
        await Projeto.findByIdAndDelete(req.params.id);
        res.status(200).send({ Projeto });
    } catch (error) {
        console.log(`erro de: ${error}`);
        res.status(500).send("erro ao deletar");
    }
};

module.exports = { listar, listarId, listarCategorias, postar, editar, deletar };
