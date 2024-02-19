# To do List

## 1. Introdução

### 1.1 Visão Geral do Projeto

O projeto To do List foi desenvolvido em resposta a um teste técnico para a ROOM Company. Permite aos usuários gerenciar tarefas, incluindo adição, exclusão e marcação de conclusão.

### 1.2 Objetivo e Finalidade

O objetivo principal é desenvolver uma aplicação simples de gerenciamento de tarefas para atender às necessidades práticas dos usuários no controle de suas atividades diárias.

### 1.3 Tecnologias Principais Utilizadas

- Next.js
- React
- Zod
- React Hook Form
- Axios
- TypeScript

### 1.4 Extras

Tomei liberdade para adicionar algumas funcionalidades que não foram solicitas pelo teste tecnico:

- Nivel de prioridade
- Pesquisa
- Ordenação das tarefas
- Data de adição e conclusão
- Tempo decorrido até a conclusão

## 2 Configuração do Ambiente de Desenvolvimento e Iniciando o projeto

### 2.1 Dependências necessárias

- Certifique-se de ter o Node.js e o git instalado em sua máquina. Caso não tenha, você pode baixá-lo em [Node.js](https://nodejs.org/) e [git](https://git-scm.com/).

### 2.2 Clonando e iniciando o projeto

- Antes de iniciar o projeto certifique-se de ter a API já iniciada.

1. Clone o repositório do projeto em seu ambiente local.

```bash
git clone https://github.com/drmatheus/to-do-list-ROOM-company
```

2. Navegue até o diretório do projeto.

```bash
cd to-do-list-ROOM-company
```

3. Navegue até o diretório do frontend.

```bash
cd web
```

4. Instale as dependencias necessárias.

```bash
npm install
```

5. Iniciando o projeto.

```bash
npm run dev
```

- Após seguir esses passos o projeto pode ser visualizado clicando [aqui](http://localhost:3000), ou acessando localhost:3000.

## 3 Estrutura do Projeto

**/app:** <br>
Contém o núcleo do projeto, incluindo arquivos essenciais como:

- page.tsx: Página principal do projeto.
- page.module.css: Estilo modular específico para a página.
- layout.tsx: Define a estrutura global da aplicação.
- globals.css: Estilos globais aplicados em toda a aplicação.

**/components:** <br>
Aqui encontram-se os componentes reutilizáveis da aplicação separados por diretorio juntamente da sua estilização. Componentes como cards, headers e outros componentes são colocados nesta pasta para facilitar a manutenção e a reutilização do código.

**/interfaces:** <br>
Armazena interfaces que são compartilhadas em várias partes do código, com exceção das interfaces de props, que são geralmente mantidas junto com os componentes correspondentes.

**/utils:** <br>
Destinado a funções utilitárias e helpers que podem ser utilizadas em diferentes partes do projeto.

**/context:** <br>
Contém os contextos do projeto, facilitando a manutenção e auxiliando no gerenciamento de estados no React.

### 4 Desenvolvimento

O projeto foi desenvolvido utilizando Next.js (v14.1.0) e React.js (v18) como principais tecnologias.

**Estilização:**<br>
CSS Modular para escopo localizado e prevenção de conflitos.
<br> **Gerenciamento de Estados:** <br>
Utilização da Context API do React para compartilhar dados entre componentes.
<br> **Requisições HTTP:** <br>
Axios para simplificar interações com a API backend.
<br> **Formularios** <br>
Zod e react-hook-form foram escolhidos para simplificar e fortalecer a validação de dados em formulários.

Essas escolhas foram feitas visando simplicidade, eficiência e facilidade de manutenção do código.

### MADE BY:

- [Matheus Dávila](https://github.com/drmatheus)
