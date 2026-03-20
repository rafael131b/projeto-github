# GitHub Finder

Aplicação client-side em React que consome a API pública do GitHub para buscar usuários, exibir seus detalhes e listar os repositórios públicos com ordenação.

## Funcionalidades

- Busca de usuário do GitHub por login.
- Exibição de detalhes do usuário: avatar, bio, seguidores, seguindo, email e informações complementares.
- Listagem de repositórios públicos do usuário.
- Ordenação dos repositórios por estrelas, data de atualização e nome.
- Página de detalhes do repositório com descrição, estatísticas, linguagem e link externo para o GitHub.
- Navegação com rotas para página inicial, perfil do usuário, detalhes do repositório e rota 404.
- Layout responsivo com tema "Midnight Terminal" e estilos customizados.

## Tecnologias

- React 19
- React Router
- Axios
- Vite

## Requisitos

- Node.js 20 ou superior
- npm 10 ou superior

## Como executar

```bash
npm install
npm run dev
```

Aplicação disponível em `http://localhost:5173`.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build de produção.
- `npm run preview`: sobe o build localmente para validação.
- `npm run lint`: executa o ESLint.

## Estrutura principal

```text
src/
  components/   componentes reutilizáveis da interface
  layouts/      layout base da aplicação
  pages/        páginas mapeadas nas rotas
  routes/       configuração do React Router
  services/     integração com a API do GitHub
  utils/        funções auxiliares de formatação e ordenação
```

## API utilizada

- Perfil do usuário: `GET /users/:username`
- Repositórios do usuário: `GET /users/:username/repos`
- Detalhes do repositório: `GET /repos/:username/:repositoryName`

Observação: a listagem de repositórios busca todas as páginas retornadas pela API para não limitar usuários com mais de 100 repositórios públicos.

## Validação

Comandos executados no projeto:

```bash
npm run lint
npm run build
```

## Demo
https://projeto-github-flax.vercel.app/
