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
    },
    cost:{
        type: Number,
        default: 0
    },
    services:{
        name:{
            type: String,
        },
        cost:{
            type: Number
        },
        description:{
            type: String,
        }
    }
});

const Projeto = mongoose.model("Projeto", projetoSchema);

module.exports = Projeto

const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = { Projeto, Categories };
