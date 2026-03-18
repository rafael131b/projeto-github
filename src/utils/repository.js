export const repositorySortOptions = [
  { value: 'stars-desc', label: 'Mais estrelas' },
  { value: 'stars-asc', label: 'Menos estrelas' },
  { value: 'updated-desc', label: 'Atualizados recentemente' },
  { value: 'name-asc', label: 'Nome (A-Z)' },
]

export function sortRepositories(repositories, sortBy) {
  const repositoriesCopy = [...repositories]

  switch (sortBy) {
    case 'stars-asc':
      return repositoriesCopy.sort(
        (firstRepository, secondRepository) =>
          firstRepository.stargazers_count - secondRepository.stargazers_count,
      )
    case 'updated-desc':
      return repositoriesCopy.sort(
        (firstRepository, secondRepository) =>
          new Date(secondRepository.updated_at) -
          new Date(firstRepository.updated_at),
      )
    case 'name-asc':
      return repositoriesCopy.sort((firstRepository, secondRepository) =>
        firstRepository.name.localeCompare(secondRepository.name),
      )
    case 'stars-desc':
    default:
      return repositoriesCopy.sort(
        (firstRepository, secondRepository) =>
          secondRepository.stargazers_count - firstRepository.stargazers_count,
      )
  }
}
