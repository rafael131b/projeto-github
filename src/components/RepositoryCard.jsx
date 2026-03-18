import { Link, useLocation } from 'react-router-dom'
import { formatDate, formatNumber } from '../utils/formatters'

function RepositoryCard({ repository }) {
  const location = useLocation()
  const repositoryPath = `/users/${repository.owner.login}/repos/${encodeURIComponent(
    repository.name,
  )}`

  return (
    <Link
      className="repo-item"
      to={repositoryPath}
      state={{ from: `${location.pathname}${location.search}` }}
    >
      <div className="repo-item-top">
        <h3>{repository.name}</h3>
        <span>{formatNumber(repository.stargazers_count)} estrelas</span>
      </div>

      <p>{repository.description || 'Sem descricao cadastrada.'}</p>

      <div className="repo-meta">
        <span>{repository.language || 'Sem linguagem definida'}</span>
        <span>{formatNumber(repository.forks_count)} forks</span>
        <span>Atualizado em {formatDate(repository.updated_at)}</span>
      </div>
    </Link>
  )
}

export default RepositoryCard
