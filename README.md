<h1 align="center">Boas-vindas ao repositório do Ignite UI!</h1>
<div align="center">🎨</div>

## O que foi desenvolvido?

O projeto <strong>Ignite UI</strong> é um design System utilizado na aplicação [Ignite Call](), de forma resumida um design system é um conjunto de padrões, componentes e diretrizes que ajudam a criar uma experiência de usuário consistente e eficiente em todas as partes de um produto digital. A principal vantagem de um design system é garantir uniformidade e reusabilidade, facilitando a colaboração entre designers e desenvolvedores. O ignite UI conta com elementos como paleta de cores, tipografias, espaçamento, botões, formulários e outros componentes de interface.

Essa aplicação é um monorepo que conta com os seguintes pacotes: "docs", que é a documentação de todos os elementos utilizando a ferramente Vite, Storybook e Polished; "react" onde os componentes foram construídos com React e estilizados com a biblioteca Stitches; "tokens" onde são descritos todas as cores, fontes, peso e tamanho de fontes, espaçamentos e raios de borda; "ts-config" e "eslint-config"
que contam com as configurações do Typescript e Eslint respectivamente, e utilizadas nos pacotes descritos anteriormente. Mais algumas bibliotecas foram utilizadas nesses projeto, como: Radix UI, Phosphor React, Tsup, Turborepo e Changesets para o controle de versões no NPM.

## Linguagens e ferramentas

- [Vite](https://nextjs.org/)
- [React](https://react.dev/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Eslint](https://eslint.org/)
- [Polished](https://polished.js.org/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Tsup](https://tsup.egoist.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [Turborepo](https://turbo.build/)
- [Changesets](https://github.com/changesets/changesets)

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

<br/>

<strong>O Storybook irá executar a aplicação na porta 6006.</strong>
<br/>
➜ http://localhost:6006