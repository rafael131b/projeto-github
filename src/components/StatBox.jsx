function StatBox({ icon, label, value }) {
  return (
    <div className="stat-box">
      {icon && <span className="stat-box-icon">{icon}</span>}
      <span className="stat-box-value">{value}</span>
      <span className="stat-box-label">{label}</span>
    </div>
  )
}

export default StatBox
