
const technologies = [
  {
    category: "BACKEND",
    items: ["PHP", "CodeIgniter", "Laravel"]
  },
  {
    category: "FRONTEND",
    items: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    category: "DATABASE",
    items: ["MySQL", "Oracle"]
  },
  {
    category: "TOOLS & WORKFLOW",
    items: ["Git", "GitHub", "Jira", "Trello"]
  }
];

function TechStack() {
  return (
    <section className="section" id="tecnologias">
      <div className="section-heading">
        <p className="section-label">02 / TECNOLOGÍAS</p>
        <h2>Herramientas de trabajo.</h2>
        <p className="section-description">
          Tecnologías y herramientas que forman parte
          de mi formación y desarrollo profesional.
        </p>
      </div>

      <div className="tech-grid">
        {technologies.map((group) => (
          <div className="tech-card" key={group.category}>
            <p>{group.category}</p>

            <div className="tech-list">
              {group.items.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="tech-note">
        Actualmente profundizando en Laravel y React.
      </p>
    </section>
  );
}

export default TechStack;
