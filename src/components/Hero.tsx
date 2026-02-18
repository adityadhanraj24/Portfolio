import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Download, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 pt-24 sm:pt-28"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-primary/5 blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-accent/5 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium mb-2 text-xs sm:text-sm tracking-widest uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
            Hi There,
            <br />
            I'm{" "}
            <span className="text-gradient glow-text">Aditya Dhanraj</span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl text-accent font-medium mb-4">
            Full Stack Developer | ML Enthusiast
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mb-6 sm:mb-8 leading-relaxed">
            A passionate developer driven by innovation and creativity. I build
            robust web applications and explore the frontiers of Machine
            Learning. Let's create something extraordinary together.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
            <a
              href="#projects"
              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 flex items-center gap-2"
            >
              View Projects <ExternalLink size={16} />
            </a>
            <a
              href="/Adityaresume.pdf"
              download="Aditya_Dhanraj_Resume.pdf"
              className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg glow-border text-primary font-medium hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-2 sm:gap-4">
            {[
              { icon: Github, href: "https://github.com/adityadhanraj24", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/aditya-dhanraj-70a4981a7", label: "LinkedIn" },
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
              href="https://leetcode.com/adithanraj"
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

export default Hero;
