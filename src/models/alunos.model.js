const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AlunoSchema = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    data_nascimento: {type: Date},
});

module.exports = mongoose.model('Aluno', AlunoSchema);