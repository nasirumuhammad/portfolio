import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  Heart,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/nasirumuhammad",
      icon: Github,
      description: "View my code repositories",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-nasiru-57675122a/",
      icon: Linkedin,
      description: "Connect on LinkedIn",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/2348101418633",
      icon: MessageCircle,
      description: "Chat on WhatsApp",
    },
    {
      name: "Telegram",
      href: "https://t.me/muhammadnasiru",
      icon: MessageCircle,
      description: "Message on Telegram",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Full-Stack Development",
    "Mobile App Development",
    "API Development",
    "Database Design",
    "DevOps & Deployment",
    "Technical Consulting",
  ];

  return (
    <footer className="bg-muted/30 border-t mt-10 px-5 md:px-0">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Muhammad Nasiru</h3>
              <p className="text-lg text-primary font-semibold mb-4">
                Full-Stack Web & Mobile Developer
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Building scalable APIs and intuitive UIs. Passionate about
                creating digital solutions that make a difference. Let's bring
                your ideas to life.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:hello@muhammadnasiru.dev"
                className="hover:text-primary transition-colors"
              >
                muhammadNasiru9292@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        {/* Social Links & CTA */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h4 className="font-semibold mb-2">
                Let's Build Something Amazing Together
              </h4>
              <p className="text-muted-foreground text-sm">
                Ready to start your next project? Get in touch today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="group"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.description}
                    >
                      <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                ))}
              </div>

              <Button className="group" asChild>
                <a href="#contact">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Start a Project
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>
                © {new Date().getFullYear()} Muhammad Nasiru. All rights
                reserved.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
