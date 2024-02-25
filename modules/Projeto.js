const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projetoSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    budget:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

const Projeto = mongoose.model("Projeto", projetoSchema);

module.exports = Projeto
