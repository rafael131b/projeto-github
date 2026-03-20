import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

function SearchForm({ initialValue = '' }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState(initialValue)

  useEffect(() => {
    setUsername(initialValue)
  }, [initialValue])

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedUsername = username.trim()

    if (!trimmedUsername) {
      navigate('/')
      return
    }

    navigate(`/users/${trimmedUsername}`)
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="search-label" htmlFor="github-username">
        Usuário do GitHub
      </label>

      <div className="search-row">
        <div className="search-input-wrapper">
          <span className="search-input-icon" aria-hidden="true">
            <SearchIcon />
          </span>
          <input
            id="github-username"
            className="search-input"
            type="text"
            placeholder="> digite um username..."
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            autoComplete="off"
          />
        </div>

        <button className="search-button" type="submit">
          <SearchIcon />
          Buscar
        </button>
      </div>
    </form>
  )
}

export default SearchForm
