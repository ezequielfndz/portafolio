
function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="section-heading">
        <p className="section-label">03 / PROYECTOS</p>
        <h2>Desarrollando soluciones.</h2>
        <p className="section-description">
          Proyectos personales orientados a resolver
          problemas mediante tecnología.
        </p>
      </div>

      <article className="project-card">
        <div className="project-preview">
          <div className="project-preview-header">
            <span>STOCKFLOW / DASHBOARD</span>
            <span>01 — 2026</span>
          </div>

          <div className="project-preview-content">
            <div className="preview-sidebar">
              <span className="preview-logo">S.</span>
              <span>Dashboard</span>
              <span>Productos</span>
              <span>Inventario</span>
              <span>Ventas</span>
            </div>

            <div className="preview-dashboard">
              <p>OVERVIEW / INVENTORY</p>
              <h3>Inventory Management</h3>

              <div className="preview-stats">
                <div>
                  <span>PRODUCTS</span>
                  <strong>---</strong>
                </div>
                <div>
                  <span>STOCK VALUE</span>
                  <strong>---</strong>
                </div>
                <div>
                  <span>SALES</span>
                  <strong>---</strong>
                </div>
              </div>

              <div className="preview-chart">
                <span>STOCK ACTIVITY</span>
                <div className="chart-bars">
                  {[35, 55, 42, 75, 48, 88, 65, 100, 72, 58, 82, 68].map(
                    (height, index) => (
                      <span
                        key={index}
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-information">
          <div className="project-title-row">
            <div>
              <p className="project-category">FEATURED PROJECT / 001</p>
              <h3>StockFlow</h3>
            </div>

            <span className="project-status">
              <span></span>
              EN DESARROLLO
            </span>
          </div>

          <p className="project-description">
            Sistema web de gestión de inventario y ventas
            pensado para pequeños comercios. El objetivo
            es centralizar productos, movimientos de stock
            y operaciones comerciales.
          </p>

          <div className="project-features">
            <span>Gestión de productos</span>
            <span>Control de inventario</span>
            <span>Registro de ventas</span>
            <span>Usuarios y permisos</span>
          </div>

          <div className="project-technologies">
            <span>PHP</span>
            <span>Laravel</span>
            <span>MySQL</span>
            <span>JavaScript</span>
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
      </article>
    </section>
  );
}

export default Projects;
