import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card rounded-lg sm:rounded-xl border border-border card-hover flex flex-col overflow-hidden group"
            >
              {/* Gradient header */}
              <div className="h-24 sm:h-28 md:h-36 bg-gradient-to-br from-primary/20 via-accent/10 to-muted flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary/40 group-hover:text-primary/60 transition-colors">
                  {project.title.split(":")[0]}
                </span>
              </div>

              <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
                <h3 className="text-base sm:text-lg font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-primary transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-border hover:border-primary/30"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-accent transition-colors px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-border hover:border-accent/30"
                    >
                      <ExternalLink size={14} /> ⭐⭐⭐⭐
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

export default Projects;
