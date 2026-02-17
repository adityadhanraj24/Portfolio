export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    title: "ChartGATE",
    description:
      "An interactive data visualization platform that transforms raw datasets into meaningful charts and insights .Built with dynamic filtering and real-time updates to help users analyze trends easily . Focused on clean UI , performance , optimization and responsive design .",
    techStack: ["React", "OLLAMA", "MongoDB", "Express.js", "RAG","Tailwind"],
    githubLink: "https://github.com/adityadhanraj",
    liveLink: "#",
  },
  {
    title: "Excel Analytics Platform",
    description:
      "A smart analytics platform that processes and visualizes Excel data using dynamic dashboards and charts. Enables users to upload spreadsheets and generate instant insights with automated calculations. Designed to simplify complex data interpretation for better decision-making.",
    techStack: ["React", "MongoDB", "Express.js", "Tailwind"],
    githubLink: "https://github.com/adityadhanraj",
    liveLink: "#",
  },
  {
    title: "Centralized Blogging System",
    description:
      "A full-stack blogging system with authentication, role-based access, and category-based content management.Allows multiple users to create, edit, and manage blogs from a centralized admin panel.Built with scalable architecture and secure backend integration",
    techStack: ["Nextjs", "Tailwind", "PostgreSql", "Express"],
    githubLink: "https://github.com/adityadhanraj",
    liveLink: "#",
  },
  {
    title: "Income Expense Manager",
    description:
      "A personal finance management system to track income, expenses, and savings efficiently.Features categorized transactions, summary reports, and visual analytics for better budgeting. Designed to promote financial awareness through a simple and intuitive interface ",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    githubLink: "https://github.com/adityadhanraj",
    liveLink: "#",
  },
  {
    title: "Diary: The Personal Dairy Manager",
    description:
      "A secure personal diary application where users can log thoughts and store personal information.Includes user authentication and private data management features.Designed with a minimal interface to provide a distraction-free writing experience.",
    techStack: ["React", "MongoDB", "Express","Tailwind CSS","JWT WebToken"],
    githubLink: "https://github.com/adityadhanraj",
    liveLink: "#",
  },
  {
    title: "Computer Lecture Blogs",
    description:
      "An educational blogging platform focused on sharing computer science concepts in a structured format.Includes categorized topics, easy navigation, and clean content presentation.Built to make technical learning simple and accessible for students..",
    techStack: ["React", "Express.js", "MongoDB","Tailwind"],
    githubLink: "https://github.com/adityadhanraj",
    liveLink: "#",
  },
];
