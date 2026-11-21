
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot"></span>
          DISPONIBLE PARA NUEVAS OPORTUNIDADES
        </div>

        <p className="hero-eyebrow">
          JUNIOR DEVELOPER · BACKEND FOCUSED
        </p>

        <h1>
          Construyendo soluciones,
          <span> línea por línea.</span>
        </h1>

        <p className="hero-description">
          Soy desarrollador enfocado en backend y en la
          creación de aplicaciones web. Me interesa construir
          soluciones funcionales, escalables y bien estructuradas.
        </p>

        <div className="hero-actions">
          <a href="#proyectos" className="button-primary">
            Explorar proyectos ↗
          </a>

          <a href="#contacto" className="button-secondary">
            Contactarme
          </a>
        </div>

        <div className="hero-stack">
          <span>PHP</span>
          <span>Laravel</span>
          <span>MySQL</span>
          <span>JavaScript</span>
          <span>Git</span>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>developer.php</span>
          </div>

          <div className="terminal-body">
            <p><span className="code-muted">01</span> <span className="code-purple">class</span> Developer</p>
            <p><span className="code-muted">02</span> {"{"}</p>
            <p><span className="code-muted">03</span> &nbsp; public $name = <span className="code-green">"Ezequiel"</span>;</p>
            <p><span className="code-muted">04</span> &nbsp; public $focus = <span className="code-green">"Backend"</span>;</p>
            <p><span className="code-muted">05</span> &nbsp; public $stack = [</p>
            <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">"PHP"</span>, <span className="code-green">"Laravel"</span>,</p>
            <p><span className="code-muted">07</span> &nbsp;&nbsp; <span className="code-green">"MySQL"</span></p>
            <p><span className="code-muted">08</span> &nbsp; ];</p>
            <p><span className="code-muted">09</span> {"}"}</p>
            <p className="terminal-cursor">_</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
