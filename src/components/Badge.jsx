function Badge({ children, variant = 'default', dot = false }) {
  return (
    <span className={`badge badge-${variant}`}>
      {dot && <span className="lang-dot" aria-hidden="true" />}
      {children}
    </span>
  )
}

export default Badge
