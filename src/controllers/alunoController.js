const db = require("../config/database");
const Aluno = require('../models/alunos.model'); 

exports.salvarAluno = async (req, res, next) => {
  try{
    const aluno = new Aluno({ nome: req.body.nome, email: req.body.email, data_nascimento: req.body.data_nascimento }); 
    aluno.save((err, result) => {
      if(err) return res.send({    
        error: 'Error',
        message: err.message    
      })  
      res.status(200).send({
        message: "Aluno cadastrado com sucesso!",
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

exports.editarAluno = async (req, res, next) => {
  try{
    Aluno.findById(req.params.id, function(err, aluno) {
      if (!aluno)
        return next(new Error("Aluno não encontrado."));
      else {
        aluno.data_nascimento = new Date(req.body.dataNascimento ? req.body.dataNascimento : aluno.data_nascimento);
        aluno.nome = req.body.nome ? req.body.nome : aluno.nome;
        aluno.email = req.body.email ? req.body.email : aluno.email;
        aluno.save(function(err) {
          if (err)
            res.send({    
              error: 'Error',
              message: err.message    
            }) 
          else
            res.status(200).send({
              message: "Aluno editado com sucesso!",
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

exports.listAlunos = async (req, res, next) => {
  try{
    if( req.params.id ){
      Aluno.findOne({_id: req.params.id}, function (err, alunos) {
        res.status(200).send(alunos);
      });  
    }else{
      for ( var query in req.query ){
        if( query == 'nome' ){
          req.query[query] = { $regex: '.*' + req.query[query] + '.*', $options:'i' }
        }
      }
      Aluno.find(req.query, function (err, alunos) {
        res.status(200).send(alunos);
      });
    }
  }catch(error){
    res.send({    
      error: 'Error',
      message: error.message    
    })  
  }
}; 