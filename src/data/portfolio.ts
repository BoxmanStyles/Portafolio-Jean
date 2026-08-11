export type Project = {
  title: string;
  description: string;
  stack: string[];
  image?: string;
  repoUrl: string;
  demoUrl: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  detail: string;
  fileUrl: string;
  imageUrl?: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
};

export const profile = {
  brand: "JeanCode.dev",
  name: "Jean Michael Rodriguez Quezada",
  displayName: "Jean Rodriguez",
  role: "Tecnico en Sistemas",
  email: "Jeanmichael0025@gmail.com",
  phone: "+1 (849) 424-0224",
  location: "Santiago, Republica Dominicana",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  cvUrl: "cv-jean-michael-rq.svg",
  photo: "jean-profile.png",
  summary:
    "Estudiante de Informatica enfocado en desarrollo web, soporte tecnico y creacion de aplicaciones informaticas. Aprendo construyendo proyectos reales y documentando mi progreso profesional.",
  about:
    "Soy responsable, comprometido y con facilidad para adaptarme a nuevos retos. Tengo habilidades en marketing digital, edicion de video, soporte tecnico y desarrollo de software, con interes especial en crear interfaces web limpias y funcionales.",
  philosophy:
    "Mi forma de aprender se basa en practicar, resolver problemas y trabajar en equipo. Busco seguir desarrollandome en el ambito profesional mientras fortalezco mis bases tecnicas.",
};

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "React",
  "TypeScript",
  "Soporte tecnico",
  "Marketing Digital",
  "Edicion de video",
  "Negociacion",
  "Git",
];

export const projects: Project[] = [
  {
    title: "Portafolio personal",
    description:
      "Pagina personal creada para presentar mis proyectos, certificados, habilidades y avances como programador. Construida con React, TypeScript y una estetica tecnica minimalista.",
    stack: ["React", "TypeScript", "CSS"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Desarrollador Web - Proyecto Escolar",
    description:
      "Creacion de paginas web con HTML y CSS, practicando estructura, estilos responsivos y diseno de interfaces basicas para proyectos academicos.",
    stack: ["HTML", "CSS", "UI"],
    repoUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Soporte Tecnico - Proyecto Escolar",
    description:
      "Instalacion y configuracion de equipos informaticos, resolucion de problemas basicos de hardware y software, y mantenimiento preventivo de computadoras.",
    stack: ["Hardware", "Software", "Soporte"],
    repoUrl: "#",
    demoUrl: "#",
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "2023 - Actualidad",
    title: "Taller de Informatica",
    organization: "Instituto Politecnico Industrial de Santiago (IPISA)",
    description:
      "Formacion tecnica orientada a informatica, desarrollo de software, herramientas digitales y fundamentos de soporte tecnico.",
    current: true,
  },
  {
    period: "2025",
    title: "Desarrollador Web - Proyecto Escolar",
    organization: "Practicas academicas",
    description:
      "Creacion de paginas web con HTML y CSS, incluyendo estructura de contenido, diseno de interfaces basicas y organizacion visual.",
  },
  {
    period: "2024",
    title: "Soporte Tecnico - Proyecto Escolar",
    organization: "Practicas academicas",
    description:
      "Configuracion de equipos, mantenimiento preventivo, apoyo a companeros y resolucion de problemas basicos de hardware y software.",
  },
  {
    period: "2024 - 2026",
    title: "Proyectos Academicos - Area de Informatica",
    organization: "IPISA",
    description:
      "Practicas de programacion basica, uso de herramientas digitales, trabajo en equipo y presentaciones tecnicas.",
  },
];

export const certificates: Certificate[] = [
  {
    title: "Marketing Digital II",
    issuer: "IBEC Latam",
    year: "2026",
    detail: "Curso internacional de Marketing Digital II, duracion 80 horas.",
    fileUrl: "certificado-marketing-digital-nivel-2.pdf",
    imageUrl: "certificate-marketing-digital.png",
  },
  {
    title: "Introduction to Java",
    issuer: "SoloLearn",
    year: "2025",
    detail: "Curso de introduccion a Java completado el 30 de enero de 2025.",
    fileUrl: "certificate-java.jpg",
    imageUrl: "certificate-java.jpg",
  },
];

export const languages = ["Espanol: Nativo", "Ingles: Basico"];
