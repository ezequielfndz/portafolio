
function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot"></span>
          DISPONIBLE PARA NUEVAS OPORTUNIDADES
        </div>

        <p className="hero-eyebrow">
          FULL STACK DEVELOPER
        </p>

        <h1>
          Construyo experiencias digitales
          <span> de principio a fin.</span>
        </h1>

        <p className="hero-description">
          Soy desarrollador Full Stack, con mayor orientación al
          Frontend. Diseño y desarrollo interfaces modernas y
          funcionales, integrando tecnologías Backend para crear
          aplicaciones completas.
        </p>

        <div className="hero-actions">
          <a href="#proyectos" className="button-primary">
            Ver proyectos ↗
          </a>

          <a href="#contacto" className="button-secondary">
            Contactarme
          </a>
        </div>

        <div className="hero-stack">
          <span>React</span>
          <span>Vue.js</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>Node.js</span>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="terminal-window" aria-hidden="true">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>developer.js</span>
          </div>

          <div className="terminal-body">
            <p>
              <span className="code-muted">01</span>{" "}
              <span className="code-purple">const</span> developer = {"{"}
            </p>
            <p>
              <span className="code-muted">02</span> &nbsp; name:{" "}
              <span className="code-green">"Ezequiel"</span>,
            </p>
            <p>
              <span className="code-muted">03</span> &nbsp; role:{" "}
              <span className="code-green">"Full Stack"</span>,
            </p>
            <p>
              <span className="code-muted">04</span> &nbsp; frontend: [
            </p>
            <p>
              <span className="code-muted">05</span> &nbsp;&nbsp;{" "}
              <span className="code-green">"React"</span>,{" "}
              <span className="code-green">"Vue.js"</span>
            </p>
            <p>
              <span className="code-muted">06</span> &nbsp; ],
            </p>
            <p>
              <span className="code-muted">07</span> &nbsp; backend: [
            </p>
            <p>
              <span className="code-muted">08</span> &nbsp;&nbsp;{" "}
              <span className="code-green">"PHP"</span>,{" "}
              <span className="code-green">"Node.js"</span>
            </p>
            <p>
              <span className="code-muted">09</span> &nbsp; ]
            </p>
            <p>
              <span className="code-muted">10</span> {"}"};
            </p>
            <p className="terminal-cursor">_</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
