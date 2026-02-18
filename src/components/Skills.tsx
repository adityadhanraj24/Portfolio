import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { allSkills } from "@/data/skills";

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
          <span className="text-sm sm:text-lg font-display font-bold text-foreground">{level}%</span>
        </div>
      </div>
      <span className="text-xs sm:text-sm font-medium text-foreground text-center">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">Here are my skills that might impress you</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
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

export default Skills;
