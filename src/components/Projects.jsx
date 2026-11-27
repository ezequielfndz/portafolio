
function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="section-heading">
        <p className="section-label">03 / PROYECTOS</p>
        <h2>Desarrollando soluciones.</h2>
        <p className="section-description">
          Proyectos reales donde aplico mis conocimientos
          para construir soluciones digitales.
        </p>
      </div>

      <article className="project-card">
        <div className="project-information">
          <div className="project-title-row">
            <div>
              <p className="project-category">
                FEATURED PROJECT / 001
              </p>
              <h3>Atrapados Entre Telas</h3>
            </div>

            <span className="project-status">
              <span></span>
              EN DESARROLLO
            </span>
          </div>

          <p className="project-description">
            Desarrollo de una tienda online con sistema
            de gestión de productos, carrito de compras
            y procesamiento de pedidos. El proyecto
            integra un frontend propio con un backend
            desarrollado en Node.js y una base de datos
            SQLite.
          </p>

          <div className="project-features">
            <span>Catálogo de productos</span>
            <span>Carrito y pedidos</span>
            <span>Control de stock</span>
            <span>Panel administrativo</span>
            <span>Gift cards</span>
            <span>Seguridad y autenticación</span>
          </div>

          <div className="project-technologies">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>SQLite</span>
          </div>

          <div className="project-links">
            <span className="project-disabled">
              Demo próximamente
            </span>

            <span className="project-disabled">
              Repositorio próximamente
            </span>
          </div>
        </div>

        <div className="project-preview">
          <div className="project-preview-header">
            <span>ATRAPADOS ENTRE TELAS / E-COMMERCE</span>
            <span>01 — 2026</span>
          </div>

          <div className="project-image-wrapper">
              <img
                src="/images/atrapados-preview.webp"
                srcSet="
                  /images/atrapados-preview-640.webp 640w,
                  /images/atrapados-preview.webp 1200w
                "
                sizes="(max-width: 700px) 100vw, 615px"
                alt="Página principal de Atrapados Entre Telas"
                width="1200"
                height="899"
              />
          </div>
        </div>
      </article>

    </section>
  );
}

export default Projects;
