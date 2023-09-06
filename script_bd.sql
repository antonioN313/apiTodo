create database dbApiTodo;

use dbApiTodo;
/*Tabelas*/
create table tarefas(
    id int,
    tarefa varchar(30),
    descricao varchar(60),
    dataTarefa date,
    status varchar(3)
);

create table categoria(
    id int,
    nome varchar(30)
);
create table tarefascategoria(
    idTarefa int,
    idCategoria int
);
 /*primary keys and constraints*/
alter table tarefas add constraint PK_tarefas primary key (id);
alter table tarefas change id id int not null auto_increment;
alter table tarefas change tarefa tarefa varchar(30) not null;
alter table tarefas add constraint CHK_status check (status in ('F','NF'));
alter table categoria add constraint PK_categoria primary key (id);
alter table categoria change id id int not null auto_increment;
alter table categoria change nome nome varchar(30) not null;
/*Foreign Key*/
alter table tarefascategoria add CONSTRAINT FK_idtarefas Foreign key (idTarefa) references tarefas(id);
alter table tarefascategoria add CONSTRAINT FK_idcategoria Foreign key (idCategoria) references categoria(id);
alter table tarefascategoria change idTarefa idTarefa int not null;
alter table tarefascategoria change idCategoria idCategoria int not null;
/*Inserir dados de exemplos nas tabelas*/
-- Inserir categorias
INSERT INTO categoria (nome) VALUES('Trabalho'),('Estudo'),('Lazer');
-- Inserir tarefas
INSERT INTO tarefas (tarefa, descricao, dataTarefa, status) VALUES('Fazer relatório mensal', 'Relatório de vendas da empresa', '2023-09-10', 'NF'),('Estudar para o exame', 'Preparação para o exame de matemática', '2023-09-15', 'NF'),('Passeio no parque', 'Caminhada no parque com amigos', '2023-09-20', 'NF');
-- Associar tarefas a categorias
INSERT INTO tarefascategoria (idTarefa, idCategoria) VALUES
    (1, 1), -- Relatório mensal está associado à categoria "Trabalho"
    (2, 2), -- Estudar para o exame está associado à categoria "Estudo"
    (3, 3); -- Passeio no parque está associado à categoria "Lazer"
/*Em caso de erros na tabela*/
drop table tarefas;
drop table categoria;
drop table tarefascategoria;
