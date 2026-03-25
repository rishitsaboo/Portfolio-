import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skills = ["React", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS", "PostgreSQL", "Git","MongoDB", "Python", "FastAPI", ];

const AboutSection = () => (
  <section id="about" className="bg-card">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">About Me</p>
        <h2 className="section-title">A little bit about myself</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I’m a full-stack developer and AI enthusiast with hands-on experience building intelligent, scalable web applications. I specialize in creating responsive user interfaces while developing robust backend systems and integrating machine learning solutions. From crafting clean React frontends to building APIs with Node.js and FastAPI, I enjoy working across the stack and solving real-world problems through technology.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            When I’m not coding, I spend time exploring advancements in AI/ML, solving problems on platforms like LeetCode, and experimenting with new ideas that combine creativity and innovation. I believe meaningful software is built through continuous learning and a strong focus on real-world impact.
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="skill-badge">{s}</span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">SDE-1 Intern at BlueStock.in — 6 months</p>
                <p className="text-sm text-muted-foreground">Billing & Analytics Dashboard – Freelance Project</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">B.Sc. Computer Science — Silver Oak University, 2024</p>
                <p className="text-sm text-muted-foreground">DSA & System Design — HeyCoach </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Code2 className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Focus Areas</h3>
                <p className="text-sm text-muted-foreground">MERN Stack Development</p>
                <p className="text-sm text-muted-foreground">Python Development</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
