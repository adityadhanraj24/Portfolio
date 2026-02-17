import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, FileCheck } from "lucide-react";

const achievements = [
  {
    icon: Briefcase,
    title: "Internship – CyberDairy Solution Pvt. Ltd.",
    description: "Worked on web development projects, gaining hands-on experience with modern tech stacks and agile workflows.",
  },
  {
    icon: Briefcase,
    title: "Internship – OmSoftware (Full Stack Developer)",
    description: "Completed a full-stack development internship focusing on building scalable web applications "},
  {
    icon: Briefcase,
    title: "CodeAlpha Internship",
    description: "Completed a software development internship focusing on real-world application building and collaboration.",
  },
   {
    icon: Briefcase,
    title: "Zidio Development Internship",
    description: "Completed a full-stack development internship focusing on building scalable web applications .",
  },
  {
    icon: FileCheck,
    title: "Certifications",
    description: "Earned certifications in Web Development, Python Programming, and Machine Learning fundamentals.",
  },
  {
    icon: Award,
    title: "Hackathon Participation",
    description: "Participated in Smart India Hackathons, securing 4th Rank in Inner round building innovative solutions under tight deadlines and competing with top talent.",
  },
];

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

export default Achievements;
