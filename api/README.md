# To do list API

API do to do list é responsavel por salvar os tarefas.

## Tecnologias Utilizadas

Nesse projeto foi utilizado:

- [NodeJS](https://nodejs.org/en/)

- [TypeScript](https://www.typescriptlang.org/)

- [Express](https://expressjs.com/)

## Arquitetura do Projeto

- controllers: Responsável por conter os controladores que lidam com as requisições da API. Cada controlador é responsável por tratar uma rota específica.

- interfaces: Contém as interfaces TypeScript que definem os tipos personalizados usados na aplicação para garantir tipagem estática e melhorar a legibilidade do código.

- middlewares: Armazena os middlewares personalizados, como validação de dados verificação de id, que são executados antes de chegar aos controladores.

- routes: Contém as rotas da API definidas usando o Express, que direcionam as requisições HTTP aos controladores corretos.

- schemas (do Zod): Armazena os esquemas do Zod, que são usados para validar os dados de entrada das requisições antes de serem processados pelos controladores.

- services: Contém a lógica de negócios da aplicação, como operações de banco de dados e outras operações complexas, que não são diretamente relacionadas à camada de controle.

- app.ts: O ponto de entrada da aplicação, onde a instância do Express é criada e configurada, incluindo middlewares globais.

- database.ts: Conte o array que é utilizado como banco de dados.

- error.ts: Gerencia o tratamento de erros da aplicação, como erros de validação e erros internos do servidor, garantindo respostas adequadas para os clientes.

- Server.ts: Responsável por inicializar o servidor Express e ouvir as requisições na porta definida.

## Iniciando o Projeto

- Certifique-se de ter o Node.js e o Git instalados.

1. Clone o repositório do projeto em seu ambiente local.

```bash
git clone https://github.com/drmatheus/to-do-list-ROOM-company
```

2. Navegue até o diretório do projeto.

```bash
cd to-do-list-ROOM-company
```

3. Navegue até o diretório da API.

```bash
cd api
```

4. Instale as dependencias necessárias.

```bash
npm install
```

5. Iniciando o projeto.

```bash
npm run dev
```

- A api estará disponivel no endereço: [localhost:3001](https://localhost:3001)

## ROTAS DA API

## ROTA /task

O objeto task é definido como:

| Campo       | Tipo   | Descrição           |
| ----------- | ------ | ------------------- |
| task        | string | Titulo da tarefa    |
| description | string | Descrição da tarefa |
| priority    | number | Prioridade de 1 - 5 |

### Endpoints de tasks

| Método | Rota     | Descrição                                                       |
| ------ | -------- | --------------------------------------------------------------- |
| POST   | task     | Cria uma task                                                   |
| GET    | task     | Retorna todas as tasks                                          |
| PUT    | task/:id | Atualiza da task para concluida e adiciona a data de conclusão. |
| DELETE | task/:id | Apaga a task                                                    |

### CRIAR TASK

### Exemplo de Request:

```
POST /task
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "task": "What is Lorem Ipsum?",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "priority": 3
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "task": "What is Lorem Ipsum?",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "priority": 3,
  "id": "97ulngg0",
  "done": false,
  "createdAt": 1708308244241
}
```

### LISTAR TASKS

### Exemplo de Request:

```
GET /task
Host: http://localhost:3000
Content-type: application/json
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "task": "What is Lorem Ipsum?",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "priority": 3,
    "id": "97ulngg0",
    "done": false,
    "createdAt": 1708308244241
  },
  {
    ...

]
```

### ATUALIZAR TASK

- Nesta rota a tarefa será apenas alterada para concluida e será adicionado uma data de conclusão no momento da requisição.

### Exemplo de Request:

```
PUT /task/:taskId
Host: http://localhost:3000
Content-type: application/json
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "task": "What is Lorem Ipsum?",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "priority": 3,
  "id": "97ulngg0",
  "done": true,
  "createdAt": 1708308244241,
  "updatedAt": 1708309016245
}
```

### APAGAR TASK

### Exemplo de Request:

```
DELETE /task/:taskId
Host: http://localhost:3000
Content-type: application/json
```

### Exemplo de Response:

```
204 NO CONTENT
```
