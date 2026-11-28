
function Contact() {
  return (
    <section className="section contact" id="contacto">
      <p className="section-label">04 / CONTACTO</p>

      <h2>
        ¿Construimos algo <span>interesante?</span>
      </h2>

      <p className="contact-description">
        Estoy abierto a nuevas oportunidades laborales,
        colaboraciones y proyectos relacionados con
        el desarrollo de software. Si tenés una propuesta
        o simplemente querés conectar, ¡hablemos!
      </p>

      <div className="contact-actions">
        <a
          href="mailto:ezequielfndz98@gmail.com?subject=Contacto%20profesional"
          className="button-primary"
        >
          <span>Enviarme un correo</span>
          <span>↗</span>
        </a>

        <a
          href="https://github.com/ezequielfndz"
          target="_blank"
          rel="noreferrer"
          className="button-secondary"
        >
          Ver GitHub ↗
        </a>
      </div>

      <div className="contact-email">
        <span>GMAIL</span>
        <a href="mailto:ezequielfndz98@gmail.com">
          ezequielfndz98@gmail.com
        </a>
      </div>

      <div className="contact-availability">
        <span className="status-dot"></span>
        DISPONIBLE PARA NUEVAS OPORTUNIDADES
      </div>
    </section>
  );
}

export default Contact;
