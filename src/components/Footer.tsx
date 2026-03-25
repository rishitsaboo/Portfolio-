import { Github, Linkedin, Phone } from "lucide-react";

const Footer = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/rishitsaboo" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rishit-saboo-94032a214/" },
    ...(phoneNumber ? [{ icon: Phone, label: "Call", href: `tel:${phoneNumber}`, display: phoneNumber }] : []),
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-heading font-bold text-lg text-foreground">
              Portfolio<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">(c) {new Date().getFullYear()} Rishit Saboo. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            {["About", "Projects", "Skills", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <s.icon size={18} />
                {s.display && <span className="text-sm">{s.display}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

