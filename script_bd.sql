create database dbApiTodo;

use dbApiTodo;
/*Tabelas*/
create table tarefas(
	id int not null auto_increment,
    tarefa varchar(30),
    categoria int,
    descricao varchar(60),
    status tinyint
);

create table categoria(
	id int not null auto_increment,
    nome varchar(30)
);
 /*primary keys*/
alter table tarefas add constraint PK_tarefas primary key (id);
alter table categoria add constraint PK_categoria primary key (id);
/*Foreign Key*/
alter table tarefas add CONSTRAINT FK_categoria Foreign key (categoria) references categoria(id); 
/*Inserir dados de exemplos nas tabelas*/