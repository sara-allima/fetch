# Treinanando Fetch API
Esse repositório contém alguns programas que foram desenvolvidos com o intuito de melhorar minhas habilidades com o foco no assunto Fetch API.

Os **projetos** são:
## Card do GitHub
### Descrição
Esse projeto consiste em uma pesquisa básica por perfis dentro do github
### Funcionamento
O código é dividido em duas funções: `fetchGithub()` e `createUser()`
A requisição da API acontece dentro da função `fetchGithub()` e é atravez dela que consigo pegar todos os dados fornecidos pela API e usar dentro do meu programa.

Se a requisição der certo, ela vai chamar a segunda função: `createUser()`. É em `createUser()` que todas as informações que a API forneceu vão ser mostradas na tela.

Ao clicar no botão "Buscar" chamamos a função `fetchGithub()` que chama `createUser()` se a requisição correr bem;
### Tecnologias e API
- JavaScript
- HTML
- CSS
- [GitHub API](docs.github.com/pt/rest)

A API do GitHub fornece um banco de dados com todos os usuários logados na aplicação
### Como usar?
1. Coloque o nome de usuário na barra de pesquisas e voilá;
## Methods
Isso é basicamente uma pasta com um arquivo HTML e JavaScript que eu criei para entender melhor o funcionamento dos métodos de requisição: Get, Post, Patch e Delete.
## API
- [JSONplaceholder API](https://jsonplaceholder.typicode.com)
## Considerações Finais
Esse projeto tem como foco aprender a usar Fetch API, por isso algumas funcionalidades não foram consideradas importantes o suficiente para serem construídas e aplicadas
