const express = require('express');
const router = express.Router();

const TarefasController = require('./controllers/TarefasController.js');
const CategoriaController = require('./controllers/CategoriaController.js');

/*Tarefas*/
router.get('/tarefas',TarefasController.buscarTodas);// buscar todas as tarefas
router.get('/tarefa/:id',TarefasController.buscarUm);//buscar uma tarefa
router.get('/tarefa/:categoria',TarefasController.buscarCategoria);// buscar tarefas por categoria
router.get('/tarefa/:status',TarefasController.buscarStatus);// buscar tarefas que foram feitas/nao feitas

router.post('/tarefa', TarefasController.inserirTarefa); // inserir uma tarefa

router.put('/tarefa/:id',TarefasController.alterarTudo); //atualizar/alterar uma tarefa
router.put('/tarefa/:id',TarefasController.alterardataTarefa);
router.put('/tarefa/:id',TarefasController.alterarStatus);

router.delete('/tarefa/:id',TarefasController.excluir); //Apagar uma tarefa (indiferente de feita ou nao)
/*Categoria*/
router.get('/categorias',CategoriaController.buscarTodas); //busca todos
router.get('/categoria/:id',CategoriaController.buscarUm); //buscar um por id

router.post('/categoria',CategoriaController.inserirCategoria); // inserir categoria
router.put('/categoria/:id',CategoriaController.alterar); // atualizar categoria
router.delete('/categoria/:id',CategoriaController.excluir); // deletar categoria

module.exports = router;