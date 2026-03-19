import { Link, useLocation } from 'react-router-dom'
import { formatDate, formatNumber } from '../utils/formatters'
import Badge from './Badge'

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const ForkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
)

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)

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
        <h3 className="repo-item-name">{repository.name}</h3>
        <Badge variant="accent">
          <StarIcon />
          {formatNumber(repository.stargazers_count)}
        </Badge>
      </div>

      <p className="repo-item-desc">
        {repository.description || 'Sem descrição cadastrada.'}
      </p>

      <div className="repo-meta">
        {repository.language && (
          <Badge variant="default" dot>
            {repository.language}
          </Badge>
        )}
        <span className="repo-meta-item">
          <ForkIcon /> {formatNumber(repository.forks_count)} forks
        </span>
        <span className="repo-meta-item">
          <ClockIcon /> {formatDate(repository.updated_at)}
        </span>
      </div>
    </Link>
  )
}

export default RepositoryCard
