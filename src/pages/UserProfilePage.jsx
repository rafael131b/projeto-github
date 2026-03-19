import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useSearchParams } from 'react-router-dom'
import FeedbackMessage from '../components/FeedbackMessage'
import LoadingSpinner from '../components/LoadingSpinner'
import RepositoryList from '../components/RepositoryList'
import UserProfileCard from '../components/UserProfileCard'
import { getUserProfile, getUserRepositories } from '../services/githubService'
import { repositorySortOptions, sortRepositories } from '../utils/repository'

function UserProfilePage() {
  const { username = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [user, setUser] = useState(null)
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const sortBy = searchParams.get('sort') || repositorySortOptions[0].value

  useEffect(() => {
    let isActive = true

    async function loadUserData() {
      setLoading(true)
      setError('')

      try {
        const [profile, repos] = await Promise.all([
          getUserProfile(username),
          getUserRepositories(username),
        ])

        if (!isActive) return

        setUser(profile)
        setRepositories(repos)
      } catch (requestError) {
        if (!isActive) return

        if (axios.isAxiosError(requestError) && requestError.response?.status === 404) {
          setError('Usuário não encontrado. Verifique o login e tente novamente.')
        } else {
          setError('Não foi possível carregar os dados do GitHub no momento.')
        }

        setUser(null)
        setRepositories([])
      } finally {
        if (isActive) setLoading(false)
      }
    }

    loadUserData()

    return () => { isActive = false }
  }, [username])

  function handleSortChange(nextSort) {
    const nextParams = new URLSearchParams(searchParams)

    if (nextSort === repositorySortOptions[0].value) {
      nextParams.delete('sort')
    } else {
      nextParams.set('sort', nextSort)
    }

    setSearchParams(nextParams, { replace: true })
  }

  if (loading) return <LoadingSpinner message="Buscando dados do usuário..." />
  if (error)   return <FeedbackMessage variant="error">{error}</FeedbackMessage>
  if (!user)   return <FeedbackMessage>Nenhum dado foi carregado para esse usuário.</FeedbackMessage>

  const sortedRepositories = sortRepositories(repositories, sortBy)

  return (
    <section className="content-grid">
      <UserProfileCard user={user} />
      <RepositoryList
        repositories={sortedRepositories}
        sortBy={sortBy}
        sortOptions={repositorySortOptions}
        onSortChange={handleSortChange}
      />
    </section>
  )
}

export default UserProfilePage
