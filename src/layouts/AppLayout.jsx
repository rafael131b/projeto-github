import { Outlet, useParams } from 'react-router-dom'
import SearchForm from '../components/SearchForm'

function AppLayout() {
  const { username } = useParams()

  return (
    <main className="app-shell">
      <section className="app-card">
        <header className="hero">
          <span className="hero-badge">GitHub Finder</span>
          <h1>Busque usuarios e explore repositorios com axios.</h1>
          <p>
            Projeto organizado com componentes, rotas e camada de servico separada
            para consumir a API do GitHub.
          </p>
        </header>

        <SearchForm initialValue={username || ''} />
        <Outlet />
      </section>
    </main>
  )
}

export default AppLayout
