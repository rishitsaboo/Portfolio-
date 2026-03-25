import { ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile-illustration.png";

const HeroSection = () => (
  <section
    className="min-h-screen flex items-center pt-16"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="section-container w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium mb-2 tracking-wide text-sm uppercase">
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-4">
            Rishit Saboo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-heading font-light mb-6">
            Creative Developer | Designer
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            I craft beautiful, performant digital experiences that live at the intersection of design and engineering. Passionate about clean code and pixel-perfect interfaces.
          </p>
          <div className="flex flex-wrap gap-4">  
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Work <ExternalLink size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={profileImg}
                alt="Rishit Saboo Software Engineer"
                width={640}
                height={640}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-xl bg-primary/10 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-accent/10 -z-10" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex justify-center mt-16"
      >
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

