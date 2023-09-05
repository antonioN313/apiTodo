# API To-Do

Esta é uma API simples para gerenciar tarefas (To-Do) construída com Node.js, Express e MySQL.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (v18.17.1 LTS ou superior)
- [NPM](https://www.npmjs.com/) (v6 ou superior)
- [MySQL](https://www.mysql.com/) (v8.0)
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## Configuração

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/api-todo.git
```

2. Navegue até o diretório do projeto:

```bash
cd apiTodo
```

3. Instale as dependências do projeto usando o NPM:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, como o nome do banco de dados, usuário e senha do MySQL, bem como outras configurações importantes.

Exemplo de `.env`:

```plaintext
DB_HOST=localhost
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=todo_db
```

## Uso

Para iniciar o servidor de desenvolvimento, você pode usar o Nodemon:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`. Você pode modificar a porta no arquivo `variaveis.env` se necessário.

## Rotas da API

A API oferece as seguintes rotas:

- `GET /tasks`: Obter todas as tarefas.
- `GET /tasks/:id`: Obter uma tarefa por ID.
- `POST /tasks`: Criar uma nova tarefa.
- `PUT /tasks/:id`: Atualizar uma tarefa existente.
- `DELETE /tasks/:id`: Excluir uma tarefa.

## Contribuição

Se você gostaria de contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. Toda ajuda é bem-vinda!

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).
