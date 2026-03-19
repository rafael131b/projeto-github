function LoadingSpinner({ message = 'Carregando...' }) {
  return (
    <div className="feedback">
      <div className="spinner" role="status" aria-label={message} />
      <span>{message}</span>
    </div>
  )
}

export default LoadingSpinner
