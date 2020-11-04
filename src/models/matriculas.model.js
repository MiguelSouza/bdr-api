const { ObjectID, ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let MatriculaSchema = new Schema({
    aluno_id: {type: ObjectId, required: true, ref: "Aluno"},
    curso_id: {type: ObjectId, required: true, ref: "Curso"},
});

module.exports = mongoose.model('Matricula', MatriculaSchema);