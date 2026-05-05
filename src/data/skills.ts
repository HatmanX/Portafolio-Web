export interface Skill {
  name: string;
  icon?: string;
  color?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  emoji: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "sap",
    title: "SAP ABAP",
    emoji: "🏢",
    skills: [
      { name: "ABAP", color: "#0070F2" },
      { name: "Reportes ALV", color: "#0070F2" },
      { name: "Module Pool", color: "#0070F2" },
      { name: "Dynpro", color: "#0070F2" },
      { name: "BAPIs", color: "#0070F2" },
      { name: "RFCs", color: "#0070F2" },
      { name: "IDocs", color: "#0070F2" },
      { name: "SmartForms", color: "#0070F2" },
      { name: "User Exits", color: "#0070F2" },
      { name: "BADIs", color: "#0070F2" },
      { name: "SAP MM", color: "#0070F2" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "React", color: "#61DAFB" },
      { name: "Vue.js", color: "#4FC08D" },
      { name: "Angular", color: "#DD0031" },
      { name: "TailwindCSS", color: "#06B6D4" },
      { name: "Bootstrap", color: "#7952B3" },
      { name: "Astro", color: "#FF5D01" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "PHP", color: "#777BB4" },
      { name: "Laravel", color: "#FF2D20" },
      { name: "Node.js", color: "#339933" },
      { name: "Java", color: "#ED8B00" },
      { name: "REST APIs", color: "#00C896" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    emoji: "📱",
    skills: [
      { name: "Flutter", color: "#02569B" },
      { name: "Kotlin", color: "#7F52FF" },
      { name: "Android", color: "#3DDC84" },
    ],
  },
  {
    id: "databases",
    title: "Bases de datos",
    emoji: "🗄️",
    skills: [
      { name: "MySQL", color: "#4479A1" },
      { name: "SQL Server", color: "#CC2927" },
    ],
  },
  {
    id: "design",
    title: "Diseño",
    emoji: "✏️",
    skills: [
      { name: "Figma", color: "#F24E1E" },
      { name: "Adobe XD", color: "#FF61F6" },
    ],
  },
  {
    id: "data",
    title: "Data & BI",
    emoji: "📊",
    skills: [
      { name: "Power BI", color: "#F2C811" },
      { name: "Excel", color: "#217346" },
    ],
  },
  {
    id: "gamedev",
    title: "Game Dev",
    emoji: "🎮",
    skills: [
      { name: "Godot Engine 4.x", color: "#478CBF" },
      { name: "GDScript", color: "#478CBF" },
      { name: "2D Platformer", color: "#478CBF" },
    ],
  },
  {
    id: "tools",
    title: "Herramientas",
    emoji: "🛠️",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "GitHub", color: "#ffffff" },
      { name: "VS Code", color: "#007ACC" },
      { name: "Postman", color: "#FF6C37" },
      { name: "Linux", color: "#FCC624" },
    ],
  },
];
