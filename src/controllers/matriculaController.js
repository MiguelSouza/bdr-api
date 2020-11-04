require("../config/database");
const { ObjectId } = require("mongodb");
const Matricula = require('../models/matriculas.model'); 

exports.salvarMatricula = async (req, res, next) => {
  try{
    const matricula = new Matricula({ aluno_id: req.body.aluno_id, curso_id: req.body.curso_id }); 
    matricula.save((err, result) => {
      if(err) return res.send({    
        error: 'Error',
        message: err.message    
      })  
      res.status(200).send({
        message: "Matrícula cadastro com sucesso!",
        body: {},
      });
    })
  }catch(error){
    res.send({    
      error: 'Error',
      message: error.message    
    })  
  }
};

exports.editarMatricula = async (req, res, next) => {
  try{
    Matricula.findById(req.params.id, function(err, matricula) {
      if (!matricula)
        return next(new Error("Matrícula não encontrado."));
      else {
        matricula.aluno_id = req.body.aluno_id ? req.body.aluno_id : matricula.aluno_id;
        matricula.curso_id = req.body.curso_id ? req.body.curso_id : matricula.curso_id;
        matricula.save(function(err) {
          if (err)
            res.send({    
              error: 'Error',
              message: err.message    
            }) 
          else
            res.status(200).send({
              message: "Matrícula editado com sucesso!",
              body: {},
            });
        });
      }
    });
  }catch(error){
    res.send({    
      error: 'Error',
      message: error.message    
    })  
  }
};

exports.listMatriculas = async (req, res, next) => {
  try{ 
    Matricula.aggregate([
      { $lookup:
         {
           from: 'cursos',
           localField: 'curso_id',
           foreignField: '_id',
           as: 'curso'
         }
       },
       { $lookup:
        {
          from: 'alunos',
          localField: 'aluno_id',
          foreignField: '_id',
          as: 'aluno'
        }
      }
      ],function(err, matriculas) {
        if (err) throw err;
        res.status(200).send(matriculas);
      });
  }catch(error){
    res.send({    
      error: 'Error',
      message: error.message    
    })  
  }
}; 