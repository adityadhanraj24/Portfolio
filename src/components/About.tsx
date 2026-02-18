import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button"; // Import the Button component
import { Link } from "react-router-dom";
import computer from "../../image/image copy 3.png"

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          {/* <p className="text-muted-foreground">A little about who I am</p> */}
        </motion.div>

<div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            {[
              { value: "6+", label: "Projects" },
              { value: "3+", label: "Internships" },
              { value: "5+", label: "Certifications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-2 sm:p-3 md:p-4 rounded-lg border border-border"
              >
                <div className="text-lg sm:text-2xl font-display font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-border card-hover flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8" // Added flex for layout
        >
          <div className="flex-shrink-0">
            <img 
              src={computer} // Placeholder image
              alt="About Me" 
              className="rounded-lg w-full sm:w-56 md:w-64 h-auto object-cover" // Adjust size as needed
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
              A Little About <span className="text-gradient">Me</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
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
              <Link to="/academics">More About Me</Link>
            </Button>
          </div>

          
        </motion.div>
      </div>
    </section>
    
  );
};

export default About;
