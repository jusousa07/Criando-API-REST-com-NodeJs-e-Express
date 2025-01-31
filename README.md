API de Gerenciamento de Alunos

Descrição

Esta é uma API simples para gerenciamento de alunos, desenvolvida com Node.js e Express. A API permite realizar operações CRUD (Create, Read, Update e Delete) em uma lista de alunos fictícia.

Tecnologias Utilizadas

Node.js

Express

Postman (para testes)

Instalação

Clone este repositório:

git clone https://github.com/jusousa0/Criando-API-REST-com-NodeJs-e-Express.git

Acesse o diretório do projeto:

cd nome-do-projeto

Instale as dependências:

npm install

Inicie o servidor:

node index.js

ou (caso esteja usando nodemon):

nodemon index.js

Endpoints

1. Rota Raiz

GET /

Retorna uma mensagem indicando que a API está funcionando.

2. Listar Todos os Alunos

GET /api/students

Retorna um array com todos os alunos cadastrados.

3. Buscar um Aluno Específico

GET /api/students/:id

Parâmetros:

id (número): ID do aluno a ser buscado.

Retorna os detalhes do aluno correspondente.

4. Adicionar um Novo Aluno

POST /api/students

Corpo da requisição (JSON):

{
  "name": "Nome do Aluno",
  "age": 10,
  "enroll": true
}

Retorna o aluno criado com seu ID gerado.

5. Atualizar um Aluno

PUT /api/students/:id

Parâmetros:

id (número): ID do aluno a ser atualizado.

Corpo da requisição (JSON, campos opcionais):

{
  "name": "Novo Nome",
  "age": 11,
  "enroll": false
}

Retorna os dados do aluno atualizado.

6. Remover um Aluno

DELETE /api/students/:id

Parâmetros:

id (número): ID do aluno a ser removido.

Retorna os dados do aluno removido.

Testando com Postman

Abra o Postman.

Utilize os endpoints acima para fazer requisições.

Envie requisições GET, POST, PUT e DELETE para testar a API.

Portas e Configuração

O servidor roda na porta 8080 por padrão. Você pode definir outra porta usando a variável de ambiente PORT.

Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
