import { Download, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const timeline = [
  { year: "2025 – Present", title: "Freelance Developer", company: "Freelance", desc: "A full-stack billing and analytics platform built for a real client, designed to streamline invoicing, track business performance, and deliver real-time insights through dynamic dashboards.", tag: "Freelance" },
  { year: "2025", title: "SWE Intern", company: "BlueStock.In", desc: "Assisted in developing a full-stack IPO web application enabling users to view and analyze upcoming and ongoing IPO data", tag: "Internship" },
  { year: "2024 – 2025", title: "Completed the DSA and System Design Program", company: "Hey Coach!", desc: "Built strong expertise in Data Structures & Algorithms and gained hands-on experience designing scalable, high-performance systems through practical, real-world problem solving.", tag: "Education" },
  { year: "2024", title: "Integrating Faster Whisper withDeep Learning Speaker Recognition", company: "International Journal of Computer Science and Mobile Computing", desc: "Published research on integrating Faster Whisper with deep learning techniques for improved speaker recognition.", tag: "Research" },
  { year: "2023", title: "GTU-Code Unnati Innovation Marathon 2023-24", company: "SAP", desc: "Named runner-up among 500+ teams by building a Real-Time Transcription with Speaker Recognition.", tag: "Achievement" },
  
  { year: "2020 – 2024", title: "B.Tech Computer Science", company: "Silver Oak University", desc: "Dean's List all semesters. Published research on accessible UI patterns in the ACM Digital Library.", tag: "Education" },
];

const ResumeSection = () => (
  <section id="resume">
    <div className="section-container">
      <AnimatedSection>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Resume</p>
            <h2 className="section-title mb-0">My Journey</h2>
          </div>
          <a
            href="https://drive.google.com/file/d/1zUx24TVZ_dZol9XdJBPrY48XgypZtpS6/view?usp=sharing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity self-start"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </AnimatedSection>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {timeline.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className={`relative flex md:items-center mb-10 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={12} /> {item.year}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-primary font-medium">{item.company}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ResumeSection;
