import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'
import FeedbackMessage from '../components/FeedbackMessage'
import RepositoryDetailsCard from '../components/RepositoryDetailsCard'
import { getRepositoryDetails } from '../services/githubService'

function RepositoryDetailsPage() {
  const { username = '', repositoryName = '' } = useParams()
  const location = useLocation()
  const [repository, setRepository] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadRepository() {
      setLoading(true)
      setError('')

      try {
        const repositoryData = await getRepositoryDetails(
          username,
          decodeURIComponent(repositoryName),
        )

        if (!isActive) {
          return
        }

        setRepository(repositoryData)
      } catch (requestError) {
        if (!isActive) {
          return
        }

        if (axios.isAxiosError(requestError) && requestError.response?.status === 404) {
          setError('Repositorio nao encontrado para esse usuario.')
        } else {
          setError('Nao foi possivel carregar os detalhes do repositorio.')
        }

        setRepository(null)
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    loadRepository()

    return () => {
      isActive = false
    }
  }, [repositoryName, username])

  if (loading) {
    return <FeedbackMessage>Carregando detalhes do repositorio...</FeedbackMessage>
  }

  if (error) {
    return <FeedbackMessage variant="error">{error}</FeedbackMessage>
  }

  if (!repository) {
    return (
      <FeedbackMessage>
        Nenhum detalhe foi encontrado para esse repositorio.
      </FeedbackMessage>
    )
  }

  return (
    <RepositoryDetailsCard
      backTo={location.state?.from || `/users/${username}`}
      repository={repository}
    />
  )
}

export default RepositoryDetailsPage
