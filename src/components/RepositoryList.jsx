import FeedbackMessage from './FeedbackMessage'
import RepositoryCard from './RepositoryCard'

function RepositoryList({
  repositories,
  sortBy,
  sortOptions,
  onSortChange,
}) {
  return (
    <article className="repos-card">
      <div className="repos-header">
        <div>
          <h2>Repositorios</h2>
          <p>{repositories.length} resultado(s) carregado(s)</p>
        </div>

        <label className="sort-box" htmlFor="sort-repos">
          Ordenar por
          <select
            id="sort-repos"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="repo-list">
        {repositories.length === 0 ? (
          <FeedbackMessage>
            Esse usuario nao possui repositorios publicos.
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
