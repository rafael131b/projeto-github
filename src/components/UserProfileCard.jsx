import { formatDate, formatNumber } from '../utils/formatters'

function UserProfileCard({ user }) {
  return (
    <article className="profile-card">
      <img
        className="profile-avatar"
        src={user.avatar_url}
        alt={`Avatar de ${user.login}`}
      />

      <div className="profile-info">
        <div>
          <h2>{user.name || user.login}</h2>
          <p className="profile-username">@{user.login}</p>
        </div>

        <p>{user.bio || 'Sem bio cadastrada.'}</p>

        <div className="stats-grid">
          <div className="stat-box">
            <strong>{formatNumber(user.followers)}</strong>
            <span>Seguidores</span>
          </div>

          <div className="stat-box">
            <strong>{formatNumber(user.following)}</strong>
            <span>Seguindo</span>
          </div>

          <div className="stat-box">
            <strong>{formatNumber(user.public_repos)}</strong>
            <span>Repositorios</span>
          </div>
        </div>

        <ul className="info-list">
          <li>Empresa: {user.company || 'Nao informado'}</li>
          <li>Localizacao: {user.location || 'Nao informado'}</li>
          <li>
            Email:{' '}
            {user.email ? (
              <a href={`mailto:${user.email}`}>{user.email}</a>
            ) : (
              'Nao publico'
            )}
          </li>
          <li>Criado em: {formatDate(user.created_at)}</li>
        </ul>

        <a
          className="ghost-link"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Ver perfil no GitHub
        </a>
      </div>
    </article>
  )
}

export default UserProfileCard
