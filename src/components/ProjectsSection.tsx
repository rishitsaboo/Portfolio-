import { ExternalLink, Github, Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";


const projects = [
  {
    title: "Billing & Analytics Dashboard",
    description: "A full-stack billing and analytics platform built for a real client, designed to streamline invoicing, track business performance, and deliver real-time insights through dynamic dashboards.",
    tech: ["React", "TypeScript", "MongoDB", "Node.js","Express.js", "Chart.js","Tailwind CSS","JWT Authentication",],
    image: project1,
    FreeLance: true,
    live: "https://bill-generator-livid.vercel.app",
    github: "https://github.com/rishitsaboo/Bill_Generator",
  },
  {
    title: "RTSR: Real-Time Transcription with Speaker Recognition",
    description: "Built a hybrid ASR and speaker recognition model using Faster Whisper and ResNet CNN, achieving 95% accuracy and a 0.94 F1 score.",
    tech: ["Faster Whisper", "ResNet CNN", "Python", "PyTorch","CNN", "ASR","Speaker Recognition"],
    image: project4,
    live: "#",
    github: "https://github.com/damnshah17/Real-Time-Transcription-with-Speaker-Recognition",
  },
  {
    title: "Kidney Stone Detection System with YOLOv8",
    description: "An advanced AI-powered system for detecting and analyzing kidney stones in medical imaging using state-of-the-art YOLOv8 deep learning models with automated training pipeline.",
    tech: ["YOLOv8", "Python", "PyTorch", "Computer Vision", "Medical Imaging"],
    image: project2,
    live: "https://drive.google.com/file/d/1A-60jlI6V5hgWSyKSAfckB37HEzAiPBd/view?usp=sharing",
    github: "https://github.com/rishitsaboo/Identification-of-Kidney-Stone-project-",
  },
  {
    title: " Medi_Graph",
    description:"A platform that simplifies complex medical data by connecting diseases, symptoms, and treatments in one place. It provides quick, accessible insights without the need to search through scattered sources or textbooks.",
    tech: ["React", "Neo4j", "Python", "Flask (backend API)", "NLP"],
    image: project3,
    live: "#",
    github: "https://github.com/rishitsaboo/Medi_Graph",
  },
  {
    title: "Leave Management System",
    description:"A comprehensive web-based application for managing employee leave requests, tracking leave balances, and streamlining the approval process in organizations. It provides an intuitive interface for employees to submit leave requests and for managers to review and approve them efficiently.",
    tech: ["React", "Python", "FastAPI (backend API)", "PostgreSQL","pydantic",],
    image: project5,
    live: "",
    github: "https://github.com/rishitsaboo/Leave-Management-System",
  },
];

const ProjectsSection = () => (
  <section id="projects">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of recent work that I'm proud of.</p>
      </AnimatedSection>

      <div className="mt-12 space-y-16">
        {projects.map((p, i) => {
          const hasLive = p.live && p.live !== "#";
          return (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="rounded-xl overflow-hidden shadow-[var(--shadow-elevated)] group">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={800}
                      height={512}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="skill-badge text-xs">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {hasLive && (
                      <a href={p.live} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    <a href={p.github} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={14} /> Source Code
                    </a>
                    <p className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      {p.FreeLance && <Briefcase size={14} />} {p.FreeLance && "Freelance Project"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

