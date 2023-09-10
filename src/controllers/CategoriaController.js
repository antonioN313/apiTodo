const CategoriaService = require('../services/CategoriaService.js');

module.exports = {

    //buscar todas as categorias
    buscarTodas: async (req, res) => {
        let json = {error:'', result:[]};

        let categorias = await CategoriaService.buscarTodos();
        for (let i in categorias) {
            json.result.push({
                id: categorias[i].id,
                nome: categorias[i].nome
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let categorias = await CategoriaService.buscarUm(id);
        if(categorias)
        {
            json.result = categorias;
        }
        res.json(json);
    },
    inserirCategoria: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        if (condition) {
            let CategoriaId = await CategoriaService.inserir(nome);
            json.result = {
                id: CategoriaId,
                nome
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    alterar: async(req,res) =>{
        let json = {error:'', result:{}};

        let id = req.body.id;
        let nome = req.body.nome;
        if (condition) {
            await CategoriaService.alterar(id,nome);
            json.result = {
                id,
                nome
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req,res) => {
        let json = {error:'', result:{}};

        await CategoriaService.excluir(req.params.id);
        
        res.json(json);
    }
}