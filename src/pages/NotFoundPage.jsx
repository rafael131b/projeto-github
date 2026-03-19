import { Link } from 'react-router-dom'

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

function NotFoundPage() {
  return (
    <section className="repo-detail-card not-found">
      <div>
        <p className="not-found-code">404</p>
        <p className="detail-kicker">Página não encontrada</p>
        <h2 style={{ color: 'var(--text-primary)', marginTop: 8, marginBottom: 8, letterSpacing: '-0.02em' }}>
          Essa rota não existe
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Volte para a busca principal e tente novamente.
        </p>
      </div>

      <Link className="primary-link" to="/">
        <HomeIcon /> Ir para a busca
      </Link>
    </section>
  )
}

export default NotFoundPage
