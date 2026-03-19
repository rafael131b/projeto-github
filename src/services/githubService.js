import { githubApi } from './githubApi'

const REPOSITORIES_PER_PAGE = 100

export async function getUserProfile(username) {
  const { data } = await githubApi.get(`/users/${username}`)
  return data
}

export async function getUserRepositories(username) {
  const repositories = []
  let page = 1

  while (true) {
    const { data } = await githubApi.get(`/users/${username}/repos`, {
      params: {
        page,
        per_page: REPOSITORIES_PER_PAGE,
        sort: 'updated',
      },
    })

    repositories.push(...data)

    if (data.length < REPOSITORIES_PER_PAGE) {
      break
    }

    page += 1
  }

  return repositories
}

export async function getRepositoryDetails(username, repositoryName) {
  const { data } = await githubApi.get(`/repos/${username}/${repositoryName}`)
  return data
}
