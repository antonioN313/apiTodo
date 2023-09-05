create database dbApiTodo;

use dbApiTodo;
/*Tabelas*/
create table tarefas(
    id int not null auto_increment,
    tarefa varchar(30),
    descricao varchar(60),
    status tinyint
);

create table categoria(
    id int not null auto_increment,
    nome varchar(30)
);
create table tarefascategoria(
    idTarefa int not null,
    idCategoria int not null
);
 /*primary keys*/
alter table tarefas add constraint PK_tarefas primary key (id);
alter table categoria add constraint PK_categoria primary key (id);
/*Foreign Key*/
alter table tarefas add CONSTRAINT FK_categoria Foreign key (categoria) references categoria(id);
alter table tarefascategoria add CONSTRAINT FK_idtarefas Foreign key (idTarefa) references tarefas(id);
alter table tarefascategoria add CONSTRAINT FK_idcategoria Foreign key (idCategoria) references categoria(id);
/*Inserir dados de exemplos nas tabelas*/
