const numberFormatter = new Intl.NumberFormat('pt-BR')
const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'medium',
})

export function formatNumber(value) {
  return numberFormatter.format(value ?? 0)
}

export function formatDate(value) {
  if (!value) {
    return 'Nao informado'
  }

  return dateFormatter.format(new Date(value))
}
