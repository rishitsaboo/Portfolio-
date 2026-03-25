import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React ", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 85 },
      ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", level: 75 },
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "Databases ",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Neo4j", level: 70 },
    ],
  },

];

const SkillsSection = () => (
  <section id="skills" className="bg-card">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Skills</p>
        <h2 className="section-title">What I work with</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat.name} delay={ci * 0.1}>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-6">{cat.name}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
