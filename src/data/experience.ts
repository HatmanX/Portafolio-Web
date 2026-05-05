export type ExperienceType = "work" | "education";

export interface ExperienceItem {
  id: number;
  type: ExperienceType;
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description: string[];
  tags?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "SAP ABAP Developer & Systems Developer",
    company: "Rensar Consulting",
    period: "2024 – Actualidad",
    current: true,
    description: [
      "Desarrollo y mantenimiento de programas ABAP en entorno productivo.",
      "Creación de reportes ALV, módulos de función y BAPIs para automatización de procesos.",
      "Implementación de mejoras con User Exits y BADIs en módulo MM.",
      "Desarrollo de sistemas internos y aplicaciones web de soporte.",
      "Análisis y corrección de errores críticos (debugging avanzado).",
    ],
    tags: ["SAP ABAP", "ALV", "BAPIs", "SAP MM", "User Exits", "BADIs"],
  },
  {
    id: 2,
    type: "work",
    title: "Frontend Developer & UI/UX Designer",
    company: "Brilark",
    period: "2023 – 2024",
    description: [
      "Desarrollo de aplicación de taxis en equipo multidisciplinario.",
      "Liderazgo en prototipación UI/UX desde wireframes hasta diseño final en Figma.",
      "Implementación de interfaces responsivas con Flutter.",
      "Arquitectura de pantallas y definición del flujo de usuario completo.",
    ],
    tags: ["Flutter", "Figma", "UI/UX", "REST API"],
  },
];

export const education: ExperienceItem[] = [
  {
    id: 3,
    type: "education",
    title: "Ingeniería de Sistemas / Desarrollo de Software",
    company: "Formación Autodidacta & Cursos Online",
    period: "2020 – Actualidad",
    description: [
      "Desarrollo Full Stack con múltiples stacks tecnológicos.",
      "Certificaciones en SAP ABAP, desarrollo móvil y diseño UI/UX.",
      "Proyectos personales en Game Dev con Godot Engine 4.x.",
      "Business Intelligence con Power BI y análisis de datos.",
    ],
    tags: ["Full Stack", "SAP", "Mobile", "Game Dev", "UI/UX"],
  },
];
