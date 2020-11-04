require("../config/database");
const Curso = require('../models/cursos.model'); 

exports.salvarCurso = async (req, res, next) => {
  try{
    const curso = new Curso({ titulo: req.body.titulo, descricao: req.body.descricao }); 
    curso.save((err, result) => {
      if(err) return res.send({    
        error: 'Error',
        message: err.message    
      })  
      res.status(200).send({
        message: "Curso cadastro com sucesso!",
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

exports.editarCurso = async (req, res, next) => {
  try{
    Curso.findById(req.params.id, function(err, curso) {
      if (!curso)
        return next(new Error("Curso não encontrado."));
      else {
        curso.titulo = req.body.titulo ? req.body.titulo : curso.titulo;
        curso.descricao = req.body.descricao ? req.body.descricao : curso.descricao;
        curso.save(function(err) {
          if (err)
            res.send({    
              error: 'Error',
              message: err.message    
            }) 
          else
            res.status(200).send({
              message: "Curso editado com sucesso!",
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

exports.listCursos = async (req, res, next) => {
  try{ 
    Curso.find({}, function (err, cursos) {
      res.status(200).send(cursos);
    });
  }catch(error){
    res.send({    
      error: 'Error',
      message: error.message    
    })  
  }
}; 