
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, forwardRef } from "react";
import {
  Award,
  Briefcase,
  FileCheck,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  Quote,
  ExternalLink,
  Download,
  ArrowDown,
  Menu,
  X,
  ArrowUp,
  Moon,
  Sun,
} from "lucide-react";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import { allSkills } from "@/data/skills";
import { Button } from "./ui/button";

// Data
const academics = [
  {
    title: "B.Tech in Computer Science",
    institution: "University",
    period: "2022 – 2026",
    detail: "Current CGPA: 8.5+",
    coursework: "Data Structures, Algorithms, DBMS, OS, Computer Networks, Machine Learning",
  },
  {
    title: "12th Standard (Intermediate)",
    institution: "Board of Intermediate Education",
    period: "2020 – 2022",
    detail: "Percentage: 75%+",
    coursework: "Physics, Chemistry, Mathematics",
  },
  {
    title: "10th Standard (Matriculation)",
    institution: "Board of Secondary Education",
    period: "2020",
    detail: "Percentage: 80%+",
    coursework: "Science, Mathematics, English",
  },
];

const achievements = [
  {
    icon: Briefcase,
    title: "Internship – CyberDairy Solution Pvt. Ltd.",
    description: "Worked on web development projects, gaining hands-on experience with modern tech stacks and agile workflows.",
  },
  {
    icon: Briefcase,
    title: "Internship – ICCC (Traffic Camera Systems)",
    description: "Contributed to traffic monitoring and camera systems, applying computer vision and IoT principles.",
  },
  {
    icon: Briefcase,
    title: "CodeAlpha Internship",
    description: "Completed a software development internship focusing on real-world application building and collaboration.",
  },
  {
    icon: FileCheck,
    title: "Certifications",
    description: "Earned certifications in Web Development, Python Programming, and Machine Learning fundamentals.",
  },
  {
    icon: Award,
    title: "Hackathon Participation",
    description: "Participated in multiple hackathons, building innovative solutions under tight deadlines and competing with top talent.",
  },
];

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];


// Components

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") !== "light";
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setDark(!dark)}
      className="relative p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-primary" />}
    </motion.button>
  );
};


interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(className, isActive && activeClassName, isPending && pendingClassName)
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-display font-bold text-gradient">
          Portfolio<span className="text-foreground"></span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-xl text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex px-5 py-2 rounded-lg text-sm font-medium glow-border text-primary hover:bg-primary/10 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-md border-t border-border"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium mb-2 text-sm tracking-widest uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
            Hi There,
            <br />
            I'm{" "}
            <span className="text-gradient glow-text">Aditya Dhanraj</span>
          </h1>
          <h2 className="text-lg sm:text-xl text-accent font-medium mb-4">
            Full Stack Developer | ML Enthusiast
          </h2>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            A passionate developer driven by innovation and creativity. I build
            robust web applications and explore the frontiers of Machine
            Learning. Let's create something extraordinary together.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 flex items-center gap-2"
            >
              View Projects <ExternalLink size={16} />
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-lg glow-border text-primary font-medium hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/adityadhanraj", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/adityadhanraj", label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
            <a
              href="https://leetcode.com/adityadhanraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200 font-bold text-sm flex items-center"
              aria-label="LeetCode"
            >
              LC
            </a>
          </div>
        </motion.div>

        {/* Right - decorative code block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full glow-border animate-pulse-glow flex items-center justify-center">
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-muted/50 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <div className="text-5xl font-display font-bold text-gradient mb-2">AD</div>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  <div className="flex justify-center gap-2 mt-4">
                    {["React", "Node", "Python", "ML"].map((t) => (
                      <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};


const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          {/* <p className="text-muted-foreground">A little about who I am</p> */}
        </motion.div>

<div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { value: "6+", label: "Projects" },
              { value: "3+", label: "Internships" },
              { value: "5+", label: "Certifications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-lg border border-border"
              >
                <div className="text-2xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-xl p-8 border border-border card-hover flex flex-col md:flex-row items-center gap-8" // Added flex for layout
        >
          <div className="flex-shrink-0">
            <img 
              src="/placeholder.svg" // Placeholder image
              alt="About Me" 
              className="rounded-lg w-full md:w-64 h-auto object-cover" // Adjust size as needed
            />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              A Little About <span className="text-gradient">Me</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a <span className="text-foreground font-medium">8th semester Computer Science student</span> passionate
              about <span className="text-primary">Full Stack Development</span> and{" "}
              <span className="text-accent">Machine Learning</span>. I have built multiple real-world
              projects and completed internships where I worked on web development and traffic camera systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My journey in tech has been driven by curiosity and a desire to solve real-world problems through code.
              From building responsive web applications to exploring the depths of machine learning algorithms,
              I constantly push myself to learn and grow. I believe in writing clean, maintainable code and
              creating user experiences that make a difference.
            </p>
            <Button asChild className="mt-4">
              <a href="academics">More About Me</a> 
            </Button>
          </div>

          
        </motion.div>
      </div>
    </section>
    
  );
};


const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl border border-border card-hover flex flex-col overflow-hidden group"
            >
              {/* Gradient header */}
              <div className="h-36 bg-gradient-to-br from-primary/20 via-accent/10 to-muted flex items-center justify-center">
                <span className="text-3xl font-display font-bold text-primary/40 group-hover:text-primary/60 transition-colors">
                  {project.title.split(":")[0]}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg border border-border hover:border-primary/30"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors px-3 py-2 rounded-lg border border-border hover:border-accent/30"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && !showAll && (
          <div className="mt-8 text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              className="px-6 py-2"
            >
              View all projects &raquo;
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};


const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground">Milestones in my journey</p>
        </motion.div>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-xl p-6 border border-border card-hover flex gap-4 items-start"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Academics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            Academic <span className="text-gradient">Records</span>
          </h2>
          <p className="text-muted-foreground">My educational journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {academics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start mb-10 md:mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] z-10" />

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-card rounded-xl p-6 border border-border card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-primary" />
                    <span className="text-xs text-primary font-medium">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                  <p className="text-sm text-accent font-medium mb-2">{item.detail}</p>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-foreground/70">Coursework:</span> {item.coursework}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CircularProgress = ({
  level,
  color,
  name,
  delay,
  inView,
}: {
  level: number;
  color: string;
  name: string;
  delay: number;
  inView: boolean;
}) => {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
          />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-display font-bold text-foreground">{level}%</span>
        </div>
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground">Here are my skills that might impress you</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10 justify-items-center">
          {allSkills.map((skill, i) => (
            <CircularProgress
              key={skill.name}
              level={skill.level}
              color={skill.color}
              name={skill.name}
              delay={0.05 * i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground">Let's work together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "dhanrajaditya743@email.com", href: "mailto:dhanrajaditya743@email.com" },
              { icon: Phone, label: "Phone", value: "+91 9473139895", href: "tel:+91" },
              { icon: Linkedin, label: "LinkedIn", value: "aditya-dhanraj-70a4981a7", href: "https://linkedin.com/in/aditya-dhanraj-70a4981a7" },
              { icon: Github, label: "GitHub", value: "github.com/adityadhanraj", href: "https://github.com/adityadhanraj24" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-hover"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-xl p-6 border border-border space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent! ✓" : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border pt-8 pb-2 px-2">
    <div className="container mx-auto max-w-3xl flex flex-col items-center text-center gap-2 mb-4">
      <h2 className="text-3xl sm:text-4xl font-display font-bold">
        Grateful for <span className="text-gradient">Your Visit!</span>
      </h2>
      <p className="text-muted-foreground">
        I truly appreciate the time you've taken to explore.
      </p>

      <div className="relative max-w-2xl py-2">
        <Quote className="absolute top-0 left-0 text-primary/20 rotate-180" size={48} />
        <h3 className="text-2xl sm:text-3xl font-display font-medium ">
          Together, we can create something <span className="text-gradient">extraordinary</span>
        </h3>
        <Quote className="absolute bottom-0 right-0 text-primary/20" size={48} />
      </div>

    </div>
    <div className="grid text-muted-foreground mx-10 text-left">
  <p>
    Thank you for visiting my portfolio. I'm passionate about crafting exceptional digital experiences that make a difference. Whether you have a project in mind or just want to connect, I'd love to hear from you. Let's collaborate and bring your ideas to life!
  </p>
  <p>
    Feel free to reach out. I look forward to connecting with you!
  </p>
</div>
</footer>
);


const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};


const First = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Academics />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default First;
