export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  category: string;
  categoryColor: string;
  demoUrl: string;
  codeUrl: string;
  hasDemo: boolean;
  hasCode: boolean;
  demoLabel: string;
  codeLabel: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "App de Taxis",
    description:
      "Aplicación móvil de transporte con flujo completo de usuario, desde la solicitud del viaje hasta el pago. Diseño UI/UX completo desde wireframes hasta prototipo final.",
    stack: ["Flutter", "Figma", "REST API"],
    category: "Mobile · UI/UX",
    categoryColor: "accent",
    demoUrl: "#", // <!-- reemplazar con URL real -->
    codeUrl: "#", // <!-- reemplazar con URL real -->
    hasDemo: true,
    hasCode: true,
    demoLabel: "Ver demo",
    codeLabel: "Ver código",
    featured: true,
  },
  {
    id: 2,
    title: "Sistema de Reportes SAP",
    description:
      "Reportes ALV personalizados para gestión de materiales en módulo MM de SAP. Incluye BAPIs, User Exits y BADIs para automatización de procesos empresariales.",
    stack: ["SAP ABAP", "ALV Grid", "SE80", "SAP MM"],
    category: "SAP · Enterprise",
    categoryColor: "blue",
    demoUrl: "#", // <!-- reemplazar con URL real -->
    codeUrl: "#", // <!-- reemplazar con URL real -->
    hasDemo: false,
    hasCode: false,
    demoLabel: "Ver detalles",
    codeLabel: "Privado",
    featured: true,
  },
  {
    id: 3,
    title: "Juego de Plataformas 2D",
    description:
      "Videojuego de plataformas con mecánicas de salto, gravedad personalizada y sistema de colisiones. Desarrollado en Godot Engine 4.x con GDScript.",
    stack: ["Godot Engine 4.x", "GDScript"],
    category: "Game Dev · 2D",
    categoryColor: "purple",
    demoUrl: "#", // <!-- reemplazar con URL real -->
    codeUrl: "#", // <!-- reemplazar con URL real -->
    hasDemo: true,
    hasCode: true,
    demoLabel: "Ver gameplay",
    codeLabel: "Ver código",
    featured: true,
  },
  {
    id: 4,
    title: "Dashboard Power BI",
    description:
      "Panel de métricas e indicadores de negocio con visualizaciones interactivas. Conectado a fuentes de datos SQL y Excel para reporting en tiempo real.",
    stack: ["Power BI", "Excel", "SQL Server"],
    category: "Business Intelligence",
    categoryColor: "yellow",
    demoUrl: "#", // <!-- reemplazar con URL real -->
    codeUrl: "#", // <!-- reemplazar con URL real -->
    hasDemo: true,
    hasCode: false,
    demoLabel: "Ver demo",
    codeLabel: "Ver código",
  },
  {
    id: 5,
    title: "Portafolio Web",
    description:
      "Este mismo portafolio — diseño y desarrollo completo desde cero. Construido con Astro 4.x y TailwindCSS con dark mode, animaciones y diseño responsive.",
    stack: ["Astro", "TailwindCSS", "TypeScript"],
    category: "Frontend · UI/UX",
    categoryColor: "accent",
    demoUrl: "#", // <!-- reemplazar con URL real -->
    codeUrl: "#", // <!-- reemplazar con URL real -->
    hasDemo: true,
    hasCode: true,
    demoLabel: "Ver demo",
    codeLabel: "Ver código",
  },
];
