import { Link } from 'react-router-dom'
import { formatDate, formatNumber } from '../utils/formatters'

function RepositoryDetailsCard({ repository, backTo }) {
  return (
    <section className="repo-detail-card">
      <Link className="back-button" to={backTo}>
        Voltar para a lista
      </Link>

      <div className="repo-detail-header">
        <div>
          <p className="detail-kicker">Repositorio selecionado</p>
          <h2>{repository.name}</h2>
          <p>{repository.description || 'Sem descricao cadastrada.'}</p>
        </div>

        <img
          className="detail-avatar"
          src={repository.owner.avatar_url}
          alt={`Avatar de ${repository.owner.login}`}
        />
      </div>

      <div className="detail-grid">
        <div className="detail-box">
          <span>Estrelas</span>
          <strong>{formatNumber(repository.stargazers_count)}</strong>
        </div>

        <div className="detail-box">
          <span>Forks</span>
          <strong>{formatNumber(repository.forks_count)}</strong>
        </div>

        <div className="detail-box">
          <span>Issues abertas</span>
          <strong>{formatNumber(repository.open_issues_count)}</strong>
        </div>

        <div className="detail-box">
          <span>Watchers</span>
          <strong>{formatNumber(repository.watchers_count)}</strong>
        </div>
      </div>

      <ul className="info-list info-list-detail">
        <li>Dono: {repository.owner.login}</li>
        <li>Linguagem principal: {repository.language || 'Nao informada'}</li>
        <li>Branch padrao: {repository.default_branch}</li>
        <li>Ultima atualizacao: {formatDate(repository.updated_at)}</li>
      </ul>

      <a
        className="primary-link"
        href={repository.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Abrir repositorio no GitHub
      </a>
    </section>
  )
}

export default RepositoryDetailsCard
