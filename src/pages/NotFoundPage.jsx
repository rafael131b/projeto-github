import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="repo-detail-card">
      <div>
        <p className="detail-kicker">Pagina nao encontrada</p>
        <h2>Essa rota nao existe.</h2>
        <p>Volte para a busca principal e tente novamente.</p>
      </div>

      <Link className="primary-link" to="/">
        Ir para a busca
      </Link>
    </section>
  )
}

export default NotFoundPage
