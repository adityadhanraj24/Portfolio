import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const academics = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Dr. Harisingh Gour Central University",
    period: "2022 – 2026",
    detail: "Current CGPA: 8.56",
    coursework: "Data Structures, Algorithms, DBMS, OS, Computer Networks, Machine Learning",
  },
  {
    title: "12th Standard (Intermediate)",
    institution: "Bihar School Examination Board",
    period: "2020 – 2022",
    detail: "Percentage: 80%",
    coursework: "Physics, Chemistry, Mathematics,Biology",
  },
  {
    title: "10th Standard (Matriculation)",
    institution: "Central Board of Secondary Education",
    period: "2020",
    detail: "Percentage: 81",
    coursework: "Science, Mathematics, English",
  },
];

const Academics = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-2">
            Academic <span className="text-gradient">Records</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">My educational journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {academics.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`relative flex items-start mb-8 sm:mb-10 md:mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] z-10" />

              {/* Card */}
              <div
                className={`ml-10 sm:ml-14 md:ml-0 md:w-[45%] ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border card-hover">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-primary sm:w-5 sm:h-5" />
                    <span className="text-[10px] sm:text-xs text-primary font-medium">{item.period}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1">{item.institution}</p>
                  <p className="text-xs sm:text-sm text-accent font-medium mb-2">{item.detail}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
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

export default Academics;
