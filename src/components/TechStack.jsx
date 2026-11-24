
import {
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub
} from "react-icons/si";

const technologies = [
  {
    category: "FRONTEND",
    main: [
      { name: "React", icon: SiReact }
    ],
    description: "Interfaces y experiencias de usuario.",
    secondary: [
      "Vue.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Flutter"
    ]
  },
  {
    category: "BACKEND",
    main: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Node.js", icon: SiNodedotjs }
    ],
    description: "Lógica de negocio, APIs y aplicaciones.",
    secondary: [
      "PHP",
      "CodeIgniter",
      "Express.js",
      "Java",
      "Spring Boot"
    ]
  },
  {
    category: "DATABASE",
    main: [
      { name: "MySQL", icon: SiMysql }
    ],
    description: "Gestión y almacenamiento de datos.",
    secondary: [
      "MongoDB",
      "Oracle",
      "SQL"
    ]
  },
  {
    category: "TOOLS & WORKFLOW",
    main: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub }
    ],
    description: "Control de versiones y trabajo colaborativo.",
    secondary: [
      "Docker",
      "Jira",
      "Trello",
      "Vercel",
      "Claude AI"
    ]
  }
];

function TechStack() {
  return (
    <section className="section" id="tecnologias">
      <div className="section-heading">
        <p className="section-label">02 / TECNOLOGÍAS</p>
        <h2>Mi stack tecnológico.</h2>
        <p className="section-description">
          Herramientas y tecnologías que utilizo para
          diseñar, desarrollar y construir aplicaciones web.
        </p>
      </div>

      <div className="tech-grid">
        {technologies.map((group) => (
          <div className="tech-card" key={group.category}>
            <p>{group.category}</p>

            <div className="tech-main">
              {group.main.map(({ name, icon: Icon }) => (
                <div className="tech-main-item" key={name}>
                  <Icon className="tech-icon" aria-hidden="true" />
                  <span>{name}</span>
                </div>
              ))}
            </div>

            <p className="tech-description">
              {group.description}
            </p>

            <div className="tech-divider"></div>

            <div className="tech-list">
              {group.secondary.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="tech-note">
        Un stack en constante evolución, impulsado por el aprendizaje y la práctica.
      </p>
    </section>
  );
}

export default TechStack;
