import { useState, FormEvent } from "react";
import { Send, Mail, Linkedin, Github, Phone  } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">Have a project in mind? I'd love to hear about it.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Get in touch</h3>
                <a href="mailto:rishitsaboo68@gmail.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} /> rishitsaboo68@gmail.com  
                </a>
              </div>

              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Follow me</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, label: "GitHub", href: "https://github.com/rishitsaboo" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rishit-saboo-94032a214/" },
                    { icon: Phone, label: "Phone", href: `tel:${import.meta.env.VITE_PHONE_NUMBER}` },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">Availability</h3>
                <p className="text-sm text-muted-foreground">Currently open for freelance projects and full-time opportunities. Let's create something amazing together.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
