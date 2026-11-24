
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
            Soy desarrollador Full Stack, con mayor orientación
            al desarrollo Frontend y especial interés en crear
            interfaces modernas, funcionales y centradas en
            la experiencia del usuario.
          </p>

          <p>
            Trabajo con tecnologías como React, Vue.js y
            JavaScript, complementando mis conocimientos con
            herramientas Backend como PHP, CodeIgniter y
            Node.js. Me interesa construir soluciones completas,
            desde la interfaz hasta la lógica de negocio y la
            integración con bases de datos y APIs.
          </p>

          <p>
            También incorporo herramientas de desarrollo
            colaborativo, control de versiones y asistencia
            mediante inteligencia artificial para analizar
            soluciones, optimizar mi flujo de trabajo y
            mejorar la calidad del código.
          </p>

          <p>
            Actualmente continúo ampliando mis conocimientos
            y desarrollando proyectos propios que me permitan
            afrontar nuevos desafíos y seguir creciendo
            profesionalmente.
          </p>
        </div>

        <div className="about-highlight">
          <span className="highlight-symbol">{`{ }`}</span>
          <h3>Full Stack mindset.</h3>
          <p>
            Interfaces cuidadas, lógica bien estructurada
            y soluciones pensadas de principio a fin.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
