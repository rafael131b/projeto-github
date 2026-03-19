const ICONS = {
  default: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  error: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
}

function FeedbackMessage({ children, variant = 'default' }) {
  const className = variant === 'error'
    ? 'feedback feedback-error'
    : 'feedback'

  return (
    <div className={className} role="alert">
      <div className="feedback-icon">
        {ICONS[variant] ?? ICONS.default}
      </div>
      <span>{children}</span>
    </div>
  )
}

export default FeedbackMessage
