const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM categoria', (error, results) => {
                if (error) { rejeitado(error); return; }
                aceito(results);
            })
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM categoria WHERE id = ?', [id], (error, results) => {
                if (error) { rejeitado(error); return; }
                if (results.lenght > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },
    inserir: (nome)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO categoria(nome) values (?)',
            [nome],
            (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results.insertID);
            });
        });
    },
    alterar:(id,nome)=>{
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE categoria SET nome = ? WHERE id = ?', [nome,id], 
            (error, results) => {
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    excluir: (id) => {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM categoria WHERE if = ?',[id], (error, results ) =>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    }
}