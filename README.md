# GitHub Finder

Aplicacao client-side em React que consome a API publica do GitHub para buscar usuarios, exibir seus detalhes e listar os repositorios publicos com ordenacao.

## Funcionalidades

- Busca de usuario do GitHub por login.
- Exibicao de detalhes do usuario: avatar, bio, seguidores, seguindo, email e informacoes complementares.
- Listagem de repositorios publicos do usuario.
- Ordenacao dos repositorios por estrelas, data de atualizacao e nome.
- Pagina de detalhes do repositorio com descricao, estatisticas, linguagem e link externo para o GitHub.
- Navegacao com rotas para pagina inicial, perfil do usuario, detalhes do repositorio e rota 404.
- Layout responsivo com Bootstrap e estilos customizados.

## Tecnologias

- React 19
- React Router
- Axios
- Bootstrap 5
- Vite

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Como executar

```bash
npm install
npm run dev
```

Aplicacao disponivel em `http://localhost:5173`.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build de producao.
- `npm run preview`: sobe o build localmente para validacao.
- `npm run lint`: executa o ESLint.

## Estrutura principal

```text
src/
  components/   componentes reutilizaveis da interface
  layouts/      layout base da aplicacao
  pages/        paginas mapeadas nas rotas
  routes/       configuracao do React Router
  services/     integracao com a API do GitHub
  utils/        funcoes auxiliares de formatacao e ordenacao
```

## API utilizada

- Perfil do usuario: `GET /users/:username`
- Repositorios do usuario: `GET /users/:username/repos`
- Detalhes do repositorio: `GET /repos/:username/:repositoryName`

Observacao: a listagem de repositorios busca todas as paginas retornadas pela API para nao limitar usuarios com mais de 100 repositorios publicos.

## Validacao

Comandos executados no projeto:

```bash
npm run lint
npm run build
```

## Demo

Link da demo hospedada: adicionar quando a publicacao estiver concluida.
