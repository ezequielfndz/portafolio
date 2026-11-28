
function Navbar() {
  return (
    <header className="navbar">
      <a href="#inicio" className="navbar-logo">
        <span className="logo-dot"></span>
        ezequiel<span className="logo-muted">.dev</span>
      </a>

    <nav className="navbar-links" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#tecnologias">Tecnologías</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
    </nav>

      <a
        href="https://github.com/ezequielfndz"
        target="_blank"
        rel="noreferrer"
        className="navbar-github"
      >
        GitHub ↗
      </a>
    </header>
  );
}

export default Navbar;
