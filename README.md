<img src=".github/watch-me.png" />

<h2 align="center">
   Watch Me | <img alt="badge rocketseat" align="center" src=".github/rocket.svg">
</h2>

<p align="center">
  <img alt="badge react" src=".github/badge-react.svg">
  <img alt="badge typescript" src=".github/badge-typescript.svg">
  <img alt="badge vscode" src=".github/badge-visual_studio_code.svg">
</p>

---

## 💻 Apresentação

**Watch Me** é uma aplicação onde o seu principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

A aplicação já está totalmente funcional mas grande parte do seu código está diretamente no arquivo `App.tsx`. Para resolver isso da melhor forma, é necessário dividir a aplicação em **pelo menos** duas partes principais: sidebar e o conteúdo principal que possui o header e a listagem de filmes.

- A aplicação possui apenas uma funcionalidade principal que é a listagem de filmes;
- Na sidebar é possível selecionar qual categoria de filmes deve ser listada;
- A primeira categoria da lista (que é "Ação") já deve começar como marcada;
- O header da aplicação possui apenas o nome da categoria selecionada que deve mudar dinamicamente.

Descrição completa do desafio: [Desafio 02 - Componentizando a aplicação](./docs/Desafio%2002%20-%20Componentizando%20a%20aplica%C3%A7%C3%A3o.md)



## 🧭 Como rodar o projeto

**Instale as dependências**

```bash
npm install
```

**Execute a aplicação**

```bash
npm run dev
```
*O projeto irá executar em **http://localhost:8080/***


**Execute Fake API**
```bash
npm run server
```
*O servidor fake irá executar em **http://localhost:3333/genres** e **http://localhost:3333/movies***

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [ReactJS](https://pt-br.reactjs.org/)
- [SASS](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/pt/)
- [Webpack](https://webpack.js.org/)

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
