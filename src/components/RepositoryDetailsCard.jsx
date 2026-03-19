import { Link } from 'react-router-dom'
import { formatDate, formatNumber } from '../utils/formatters'

const icons = {
  back: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  star: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  fork: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  ),
  issue: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  eye: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  owner: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  branch: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  ),
  clock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  external: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
}

const STATS = [
  { key: 'stargazers_count', icon: icons.star,  label: 'Estrelas'       },
  { key: 'forks_count',      icon: icons.fork,  label: 'Forks'          },
  { key: 'open_issues_count',icon: icons.issue, label: 'Issues abertas' },
  { key: 'watchers_count',   icon: icons.eye,   label: 'Watchers'       },
]

function RepositoryDetailsCard({ repository, backTo }) {
  return (
    <section className="repo-detail-card">
      <Link className="back-button" to={backTo}>
        {icons.back} Voltar para a lista
      </Link>

      <div className="repo-detail-header">
        <div className="repo-detail-header-info">
          <p className="detail-kicker">Repositório selecionado</p>
          <h2>{repository.name}</h2>
          <p className="repo-detail-desc">
            {repository.description || 'Sem descrição cadastrada.'}
          </p>
        </div>
        <img
          className="detail-avatar"
          src={repository.owner.avatar_url}
          alt={`Avatar de ${repository.owner.login}`}
        />
      </div>

      <div className="detail-grid">
        {STATS.map(({ key, icon, label }) => (
          <div key={key} className="detail-stat-box">
            <div className="detail-stat-icon">{icon}</div>
            <div className="detail-stat-info">
              <span className="detail-stat-value">{formatNumber(repository[key])}</span>
              <span className="detail-stat-label">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <ul className="info-list-detail">
        <li>{icons.owner}  Dono: {repository.owner.login}</li>
        <li>{icons.code}   Linguagem: {repository.language || 'Não informada'}</li>
        <li>{icons.branch} Branch: {repository.default_branch}</li>
        <li>{icons.clock}  Atualizado: {formatDate(repository.updated_at)}</li>
      </ul>

      <a className="primary-link" href={repository.html_url} target="_blank" rel="noreferrer">
        {icons.external} Abrir no GitHub
      </a>
    </section>
  )
}

export default RepositoryDetailsCard
