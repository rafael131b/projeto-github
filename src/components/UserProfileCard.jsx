import { formatDate, formatNumber } from '../utils/formatters'
import StatBox from './StatBox'

const icons = {
  followers: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  following: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  ),
  repos: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h18v18H3z" /><path d="M3 9h18" /><path d="M9 21V9" />
    </svg>
  ),
  building: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  map: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  link: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
}

function UserProfileCard({ user }) {
  return (
    <article className="profile-card">
      <div className="profile-avatar-wrapper">
        <img
          className="profile-avatar"
          src={user.avatar_url}
          alt={`Avatar de ${user.login}`}
        />
        <div className="profile-avatar-ring" aria-hidden="true" />
      </div>

      <div className="profile-info">
        <div>
          <h2 className="profile-name">{user.name || user.login}</h2>
          <p className="profile-username">@{user.login}</p>
        </div>

        {user.bio && <p className="profile-bio">{user.bio}</p>}

        <div className="stats-grid">
          <StatBox icon={icons.followers} label="Seguidores" value={formatNumber(user.followers)} />
          <StatBox icon={icons.following} label="Seguindo"   value={formatNumber(user.following)} />
          <StatBox icon={icons.repos}     label="Repos"      value={formatNumber(user.public_repos)} />
        </div>

        <div className="divider" />

        <ul className="info-list">
          <li>{icons.building} {user.company || 'Empresa não informada'}</li>
          <li>{icons.map}      {user.location || 'Localização não informada'}</li>
          <li>
            {icons.mail}
            {user.email
              ? <a href={`mailto:${user.email}`}>{user.email}</a>
              : 'Email não público'}
          </li>
          <li>{icons.calendar} Desde {formatDate(user.created_at)}</li>
        </ul>

        <a className="ghost-link" href={user.html_url} target="_blank" rel="noreferrer">
          {icons.link} Ver perfil no GitHub
        </a>
      </div>
    </article>
  )
}

export default UserProfileCard
