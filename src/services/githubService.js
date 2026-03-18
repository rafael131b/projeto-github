import { githubApi } from './githubApi'

export async function getUserProfile(username) {
  const { data } = await githubApi.get(`/users/${username}`)
  return data
}

export async function getUserRepositories(username) {
  const { data } = await githubApi.get(`/users/${username}/repos`, {
    params: {
      per_page: 100,
      sort: 'updated',
    },
  })

  return data
}

export async function getRepositoryDetails(username, repositoryName) {
  const { data } = await githubApi.get(`/repos/${username}/${repositoryName}`)
  return data
}
