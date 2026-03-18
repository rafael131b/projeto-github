import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
        Usuario do GitHub
      </label>

      <div className="search-row">
        <input
          id="github-username"
          className="search-input"
          type="text"
          placeholder="Ex.: octocat"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button className="search-button" type="submit">
          Buscar
        </button>
      </div>
    </form>
  )
}

export default SearchForm
