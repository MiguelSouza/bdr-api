const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController')
const alunoController = require('../controllers/alunoController')
const matriculaController = require('../controllers/matriculaController')

//curso
router.post('/cursos', cursoController.salvarCurso);
router.get('/cursos/:id', cursoController.listCursos);
router.get('/cursos', cursoController.listCursos);
router.put('/cursos/:id', cursoController.editarCurso);

//aluno
router.post('/alunos', alunoController.salvarAluno);
router.get('/alunos/:id', alunoController.listAlunos);
router.get('/alunos', alunoController.listAlunos);
router.put('/alunos/:id', alunoController.editarAluno);

//matricula
router.post('/matriculas', matriculaController.salvarMatricula);
router.get('/matriculas/:id', matriculaController.listMatriculas);
router.get('/matriculas', matriculaController.listMatriculas);
router.put('/matriculas/:id', matriculaController.editarMatricula);

module.exports = router;