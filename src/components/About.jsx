
function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="section-heading">
        <p className="section-label">01 / SOBRE MÍ</p>
        <h2>Detrás del código.</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            Soy desarrollador enfocado en backend y en la
            construcción de aplicaciones web.
          </p>

          <p>
            Mi experiencia de aprendizaje incluye PHP,
            CodeIgniter, bases de datos y herramientas
            de desarrollo como Git y GitHub.
          </p>

          <p>
            Actualmente estoy profundizando mis conocimientos
            en Laravel y React, desarrollando proyectos propios
            para fortalecer mis habilidades técnicas.
          </p>
        </div>

        <div className="about-highlight">
          <span className="highlight-symbol">{`{ }`}</span>
          <h3>Backend first.</h3>
          <p>
            Código organizado, soluciones prácticas
            y aprendizaje constante.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
