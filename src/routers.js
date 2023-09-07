const express = require('express');
const router = express.Router();

const TarefasController = require('./controllers/TarefasController.js');
const CategoriaController = require('./controllers/CategoriaController');
const TarefasCategoriaController = require('./controllers/TarefasCategoriaController');

/*Tarefas*/
router.get // buscar todas as tarefas
router.get //buscar uma tarefa
router.get // buscar tarefas por categoria
router.get // buscar tarefas que foram feitas/nao feitas
router.post // inserir uma tarefa
router.put //atualizar/alterar uma tarefa
router.delete //Apagar uma tarefa (indiferente de feita ou nao)
/*Categoria*/
router.get //busca todos
router.get //buscar um por id
router.post // inserir categoria
router.put // atualizar categoria
router.delete // deletar categoria
/*Associacoes (TarefasCategoria)*/
router.get //buscar todos
router.get // buscar por 
router.post // inserir uma associacao
router.put // alterar/atualizar uma associacao
router.delete // deletar associacoes