const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CursoSchema = new Schema({
    titulo: {type: String, required: true},
    descricao: {type: String},
});

module.exports = mongoose.model('Curso', CursoSchema);