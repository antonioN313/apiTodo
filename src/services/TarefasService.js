const { buscarTodas } = require('../controllers/TarefasController');
const db = require('../db');
module.exports = {
    buscarTodas: ()=> {
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * FROM tarefas',(error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            })
        });
    },
    buscarUm: (id) =>{
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * from tarefas where id = ?' [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.lenght > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
    buscarCategoria: (categoria) => {
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * from tarefas where categoria = ?' [categoria], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.lenght > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
    buscarStatus: (status) => {
        return new Promise((aceito,rejeitado)=>{
            db.query('SELECT * from tarefas where status = ?' [status], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.lenght > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
    inserirTarefa: (tarefa,descricao,dataTarefa,status) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO categoria(tarefa,descricao,dataTarefa,status) values (?)',
            [tarefa,descricao,dataTarefa,status],
            (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results.insertID);
            });
        });
    },
    alterarTudo: (id,tarefa,descricao,dataTarefa,status) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE tarefas SET tarefa = ?,descricao = ?, dataTarefa = ?, status = ? WHERE id = ?',
            [id,tarefa,descricao,dataTarefa,status], (error,results)=>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            })
        })
    },
    alterardataTarefa:(id,dataTarefa) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE tarefas SET dataTarefa = ? WHERE id = ?',
            [id,dataTarefa], (error,results)=>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            })
        })
    },
    alterarStatus:(id,status)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('UPDATE tarefas SET status = ? WHERE id = ?',
            [id,status], (error,results)=>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            })
        })
    },
    excluir: (id) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM tarefas WHERE id = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
}