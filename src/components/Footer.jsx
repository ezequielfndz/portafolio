
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            E<span>.</span>
          </a>
          <p>Full Stack Developer</p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="footer-socials">
          <a
            href="https://github.com/ezequielfndz"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:ezequielfndz98@gmail.com">
            Email ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Ezequiel. Todos los derechos reservados.</p>
        <span>Diseñado y desarrollado con React.</span>
      </div>
    </footer>
  );
}

export default Footer;
