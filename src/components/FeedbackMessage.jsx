function FeedbackMessage({ children, variant = 'default' }) {
  const className =
    variant === 'error' ? 'feedback feedback-error' : 'feedback'

  return <div className={className}>{children}</div>
}

export default FeedbackMessage
