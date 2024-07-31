<h1 align="center">Boas-vindas ao repositório do Ignite UI!</h1>

<div align="center"><img src="public/icon-app.svg"/></div>

<h2 align="center">
  <a href="https://ignite-ui.vercel.app" target="_blank">
    Conheça o Ignite UI!
  </a>
</h2>

## O que foi desenvolvido?

<strong>Ignite UI</strong> é um design system utilizado na aplicação [Ignite Call](https://github.com/h3zord/ignite-call). De forma resumida, um design system é um conjunto de padrões, componentes e diretrizes que ajudam a criar uma experiência de usuário consistente e eficiente em todas as partes de um produto digital. A principal vantagem de um design system é garantir uniformidade e reusabilidade, facilitando a colaboração entre designers e desenvolvedores. O Ignite UI conta com elementos como paleta de cores, tipografias, espaçamento, botões, formulários e outros componentes de interface.

Esta aplicação é um monorepo que contém os seguintes pacotes:

- docs: Documentação de todos os elementos utilizando Vite (versão 4.4.5), Storybook (versão 7.5.1), TypeScript e Polished.
- react: Onde os componentes foram construídos com React (versão 18.2.0), TypeScript e estilizados com a biblioteca Stitches.
- tokens: Descrição de todas as cores, fontes, pesos e tamanhos de fontes, espaçamentos e raios de borda.
- ts-config e eslint-config: Configurações do TypeScript e ESLint, respectivamente, utilizadas nos pacotes descritos anteriormente.

Outras bibliotecas utilizadas incluem: Radix UI, Phosphor Icons, Tsup, Turborepo, Changesets para controle de versões no NPM e Git para controle de versão do código.

## Linguagens e ferramentas

- [Vite](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Polished](https://polished.js.org/)
- [Stitches](https://stitches.dev/)
- [Eslint](https://eslint.org/)
- [Radix UI](https://www.radix-ui.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Tsup](https://tsup.egoist.dev/)
- [Turborepo](https://turbo.build/)
- [Changesets](https://github.com/changesets/changesets)
- [Git](https://git-scm.com/)

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/ignite-ui.git
```

### 2 - Entre no repositório
```
cd ignite-ui
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm run dev
```
Caso utilize o yarn
```
yarn run dev
```

<strong>Storybook irá executar a aplicação na porta 6006.</strong>
<br/>
➜ http://localhost:6006