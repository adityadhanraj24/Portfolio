export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const allSkills: Skill[] = [
  { name: "HTML", level: 90, color: "hsl(15, 90%, 55%)" },
  { name: "CSS", level: 85, color: "hsl(220, 80%, 55%)" },
  { name: "JavaScript", level: 85, color: "hsl(50, 90%, 55%)" },
  { name: "Bootstrap", level: 80, color: "hsl(265, 70%, 55%)" },
  { name: "TailwindCSS", level: 85, color: "hsl(190, 90%, 50%)" },
  { name: "React", level: 80, color: "hsl(195, 80%, 50%)" },
  { name: "Express.js", level: 75, color: "hsl(0, 60%, 45%)" },
  { name: "Node.js", level: 75, color: "hsl(120, 50%, 50%)" },
  { name: "MongoDB", level: 75, color: "hsl(140, 60%, 45%)" },
  { name: "MySQL", level: 70, color: "hsl(190, 70%, 45%)" },
  { name: "C", level: 80, color: "hsl(210, 70%, 50%)" },
  { name: "Python", level: 75, color: "hsl(210, 60%, 60%)" },
  { name: "Git", level: 80, color: "hsl(10, 70%, 50%)" },
  { name: "GitHub", level: 80, color: "hsl(120, 60%, 50%)" },
  { name: "Java", level: 80, color: "hsl(50, 90%, 55%)" },
  { name: "Machine Learning", level: 65, color: "hsl(280, 60%, 55%)" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "C", level: 80, color: "hsl(210, 70%, 50%)" },
      { name: "C++", level: 85, color: "hsl(200, 80%, 55%)" },
      { name: "Python", level: 75, color: "hsl(210, 60%, 60%)" },
      { name: "JavaScript", level: 85, color: "hsl(50, 90%, 55%)" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90, color: "hsl(15, 90%, 55%)" },
      { name: "CSS", level: 85, color: "hsl(220, 80%, 55%)" },
      { name: "Bootstrap", level: 80, color: "hsl(265, 70%, 55%)" },
      { name: "React", level: 80, color: "hsl(195, 80%, 50%)" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75, color: "hsl(120, 50%, 50%)" },
      { name: "Express.js", level: 75, color: "hsl(0, 60%, 45%)" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 75, color: "hsl(140, 60%, 45%)" },
      { name: "MySQL", level: 70, color: "hsl(190, 70%, 45%)" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Git", level: 80, color: "hsl(10, 70%, 50%)" },
      { name: "Machine Learning", level: 65, color: "hsl(280, 60%, 55%)" },
      { name: "TailwindCSS", level: 85, color: "hsl(190, 90%, 50%)" },
    ],
  },
];
