import { useEffect, useState } from "react";
import {
  certificates,
  languages,
  profile,
  projects,
  skills,
  timeline,
} from "./data/portfolio";

const navItems = [
  ["Inicio", "hero"],
  ["Sobre mi", "sobre-mi"],
  ["Proyectos", "proyectos"],
  ["Certificados", "certificados"],
  ["Contacto", "contacto"],
];

function Icon({ name }: { name: string }) {
  return <span className="material-symbols-outlined">{name}</span>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Navegacion principal">
        <a className="brand" href="#hero" onClick={() => setOpen(false)}>
          {profile.brand}
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>

        <div className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href={profile.cvUrl} download>
            Descargar CV
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-glow" />
      <div className="hero-layout">
        <div className="hero-content">
          <div className="status-pill">
            <span />
            Disponible para crecer
          </div>
          <h1>
            Hola, soy <strong>{profile.displayName}</strong>.
            <br />
            {profile.role}.
          </h1>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="#proyectos">
              Ver proyectos
              <Icon name="arrow_forward" />
            </a>
            <a className="button button--secondary" href="#contacto">
              Contactar
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Resumen profesional">
          <img src={profile.photo} alt={`Foto profesional de ${profile.name}`} />
          <div>
            <span>Perfil</span>
            <strong>{profile.name}</strong>
            <small>{profile.location}</small>
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="bento">
        <article className="panel about-panel">
          <Icon name="terminal" />
          <h2>
            <span>&lt;/&gt;</span> Sobre mi
          </h2>
          <p>{profile.about}</p>
          <p>{profile.philosophy}</p>
        </article>

        <article className="panel">
          <h3>Stack y habilidades</h3>
          <div className="skills">
            {skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                <Icon name={skillIcon(skill)} />
                {skill}
              </span>
            ))}
          </div>
          <div className="language-list">
            <h3>Idiomas</h3>
            {languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section" id="proyectos">
      <SectionTitle marker="[01]" title="Proyectos destacados" />
      <div className="project-grid">
        {projects.map((project, index) =>
          project.image ? (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt="" />
                <span>Live</span>
              </div>
              <ProjectBody project={project} />
            </article>
          ) : (
            <article className="project-card code-card" key={project.title}>
              <div className="code-window">
                <span>{index === 0 ? "portfolio.tsx" : "school-project.md"}</span>
                <pre>
                  <code>{codeSamples[index] ?? codeSamples[0]}</code>
                </pre>
              </div>
              <ProjectBody project={project} />
            </article>
          ),
        )}
      </div>
    </section>
  );
}

function ProjectBody({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="project-body">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-footer">
        <div>
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.repoUrl} aria-label={`Repositorio de ${project.title}`}>
            <Icon name="code" />
          </a>
          <a href={project.demoUrl} aria-label={`Demo de ${project.title}`}>
            <Icon name="open_in_new" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Credentials() {
  return (
    <section className="section two-column" id="certificados">
      <div>
        <SectionTitle marker="sys.log" title="Trayectoria" />
        <div className="timeline">
          {timeline.map((item) => (
            <article className={item.current ? "current" : ""} key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle marker="verify" title="Certificados" />
        <div className="certificate-list">
          {certificates.map((certificate) => (
            <article className="certificate" key={certificate.title}>
              <div className="certificate-icon">
                <Icon name="workspace_premium" />
              </div>
              <span>
                <strong>{certificate.title}</strong>
                <small>
                  {certificate.issuer} · {certificate.year}
                </small>
                <em>{certificate.detail}</em>
              </span>
              <a href={certificate.fileUrl} aria-label={`Abrir ${certificate.title}`}>
                <Icon name="open_in_new" />
              </a>
            </article>
          ))}
        </div>

        <div className="certificate-preview-grid">
          {certificates.map((certificate) =>
            certificate.imageUrl ? (
              <a
                className="certificate-preview"
                href={certificate.fileUrl}
                key={certificate.title}
                aria-label={`Ver certificado ${certificate.title}`}
              >
                <img src={certificate.imageUrl} alt="" />
                <span>{certificate.title}</span>
              </a>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contacto">
      <div className="contact-panel">
        <div className="contact-header">
          <h2>Inicializar contacto</h2>
          <p>
            Si tienes una oportunidad, una idea o quieres revisar mi trabajo,
            puedes escribirme directamente.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form">
            <label>
              Nombre_del_proceso
              <input type="text" placeholder="Tu nombre" />
            </label>
            <label>
              Direccion_de_retorno
              <input type="email" placeholder="tu@email.com" />
            </label>
            <label>
              Payload
              <textarea rows={4} placeholder="Detalles del mensaje..." />
            </label>
            <button type="button">Ejecutar envio</button>
          </form>

          <div className="direct-links">
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              <span>
                <strong>Correo electronico</strong>
                <small>{profile.email}</small>
              </span>
              <Icon name="arrow_forward" />
            </a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
              <Icon name="call" />
              <span>
                <strong>Telefono</strong>
                <small>{profile.phone}</small>
              </span>
              <Icon name="arrow_forward" />
            </a>
            <a href={profile.linkedin}>
              <Icon name="work" />
              <span>
                <strong>LinkedIn</strong>
                <small>Pendiente de agregar</small>
              </span>
              <Icon name="arrow_forward" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>{profile.brand}</strong>
      <div>
        <a href={profile.github}>GitHub</a>
        <a href={profile.linkedin}>LinkedIn</a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.cvUrl}>Curriculum</a>
      </div>
      <p>© 2026 {profile.brand}. Todos los derechos reservados.</p>
    </footer>
  );
}

function SectionTitle({ marker, title }: { marker: string; title: string }) {
  return (
    <h2 className="section-title">
      <span>{marker}</span>
      {title}
    </h2>
  );
}

const codeSamples = [
  `const portfolio = {
  owner: "Jean Rodriguez",
  focus: ["React", "TypeScript", "CSS"],
  goal: "mostrar progreso profesional",
};

export default portfolio;`,
  `Proyecto escolar: Desarrollo Web

- Creacion de paginas con HTML y CSS
- Diseno de interfaces basicas
- Practica de estructura visual`,
  `Proyecto escolar: Soporte Tecnico

- Configuracion de equipos
- Mantenimiento preventivo
- Resolucion de problemas basicos`,
];

function skillIcon(skill: string) {
  if (skill.includes("Git")) return "account_tree";
  if (skill.includes("Marketing")) return "campaign";
  if (skill.includes("video")) return "movie";
  if (skill.includes("Soporte")) return "construction";
  if (skill.includes("Java")) return "coffee";
  return "data_object";
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
