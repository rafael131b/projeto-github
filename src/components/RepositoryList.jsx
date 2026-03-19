import FeedbackMessage from './FeedbackMessage'
import RepositoryCard from './RepositoryCard'

function RepositoryList({ repositories, sortBy, sortOptions, onSortChange }) {
  return (
    <article className="repos-card">
      <div className="repos-header">
        <div className="repos-header-left">
          <h2>Repositórios</h2>
          <p>{repositories.length} resultado(s) carregado(s)</p>
        </div>

        <div className="sort-select-wrapper">
          <select
            id="sort-repos"
            className="sort-select"
            value={sortBy}
            aria-label="Ordenar repositórios por"
            onChange={(event) => onSortChange(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="repo-list">
        {repositories.length === 0 ? (
          <FeedbackMessage>
            Esse usuário não possui repositórios públicos.
          </FeedbackMessage>
        ) : (
          repositories.map((repository) => (
            <RepositoryCard key={repository.id} repository={repository} />
          ))
        )}
      </div>
    </article>
  )
}

export default RepositoryList
