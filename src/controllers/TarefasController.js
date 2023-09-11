const TarefasService = require('../services/TarefasService.js');

module.exports = {

    //buscarTodas
    buscarTodas: async(req,res)=>{
        let json = {error:'',result:[]};

        let tarefas = await TarefasService.buscarTodas();
        for (let i in tarefas) {
            json.result.push({
                id: tarefas[i].id,
                tarefa: tarefas[i].tarefa,
                descricao: tarefas[i].descricao,
                dataTarefa: tarefas[i].dataTarefa,
                status: tarefas[i].status
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:[]};

        let id = req.params.id;
        let tarefas = await TarefasService.buscarUm(id);
        if(tarefas)
        {
            json.result = tarefas;
        }
        res.json(json);
    },
    buscarCategoria: async (req, res) => {
        let json = {error:'', result:[]};

        let categoria = req.params.categoria;
        let tarefas = await TarefasService.buscarCategoria(categoria);
        if(tarefas)
        {
            json.result = tarefas;
        }
        res.json(json);
    },
    buscarStatus: async (req, res) => {
        let json = {error:'', result:[]};

        let status = req.params.status;
        let tarefas = await TarefasService.buscarStatus(status);
        if(tarefas)
        {
            json.result = tarefas;
        }
        res.json(json);
    },

    inserirTarefa: async(req, res) => {
        let json = {error:'', result:{}};

        let tarefa = req.body.tarefa;
        let descricao = req.body.descricao;
        let dataTarefa = req.body.dataTarefa;
        let status = req.body.status;
        if (condition) {
            let tarefaId = await TarefasService.inserir(tarefa,descricao,dataTarefa,status);
            json.result = {
                id: tarefaId,
                tarefa,
                descricao,
                dataTarefa,
                status
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    alterarTudo: async(req, res) => {
        let json = {error:'', result:{}};

        let tarefa = req.body.tarefa;
        let descricao = req.body.descricao;
        let dataTarefa = req.body.dataTarefa;
        let status = req.body.status;
        if (condition) {
            await TarefasService.alterarTudo(id,tarefa,descricao,dataTarefa,status);
            json.result = {
                id,
                tarefa,
                descricao,
                dataTarefa,
                status
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    alterardataTarefa: async(req, res) =>{
        let json = {error:'', result:{}};

        let tarefa = req.body.tarefa;
        let descricao = req.body.descricao;
        let dataTarefa = req.body.dataTarefa;
        let status = req.body.status;
        if (condition) {
            await TarefasService.alterardataTarefa(id,dataTarefa);
            json.result = {
                id,
                tarefa,
                descricao,
                dataTarefa,
                status
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    alterarStatus: async(req, res)=> {
        let json = {error:'', result:{}};

        let tarefa = req.body.tarefa;
        let descricao = req.body.descricao;
        let dataTarefa = req.body.dataTarefa;
        let status = req.body.status;
        if (condition) {
            await TarefasService.alterarStatus(id,status);
            json.result = {
                id,
                tarefa,
                descricao,
                dataTarefa,
                status
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }, 
    excluir:async(req,res) => {
        let json = {error:'', result:{}};

        await TarefasService.excluir(req.params.id);
        
        res.json(json);
    }
}