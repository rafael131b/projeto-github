const SearchIllustration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
    <circle cx="19" cy="19" r="3" />
    <line x1="21.5" y1="21.5" x2="23" y2="23" />
  </svg>
)

function HomePage() {
  return (
    <div className="home-empty">
      <div className="home-empty-icon">
        <SearchIllustration />
      </div>
      <h2>
        Busque um usuário do GitHub
        <span className="blink-cursor" aria-hidden="true" />
      </h2>
      <p>
        Digite um nome de usuário no campo acima para carregar o perfil,
        estatísticas e repositórios públicos.
      </p>
    </div>
  )
}

export default HomePage
