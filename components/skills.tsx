import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Server,
  Wrench,
  Shield,
  Palette,
  Database,
  Smartphone,
  Cloud,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "bg-blue-500/10 text-blue-600",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Native",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "bg-green-500/10 text-green-600",
      skills: ["Node.js", "Express", "FastAPI", "Bun.js", "Elysia"],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Docker", "Git", "Github", , "VS Code"],
    },
    {
      title: "Authentication",
      icon: Shield,
      color: "bg-red-500/10 text-red-600",
      skills: [
        "Firebase Auth",
        "JWT",
        "OAuth",
        "NextAuth",
        "Supabase Auth",
        "Auth0",
        "Passport",
      ],
    },
    {
      title: "Design",
      icon: Palette,
      color: "bg-pink-500/10 text-pink-600",
      skills: [
        "Figma",
        "Adobe XD",
        "UI/UX Design",
        "Responsive Design",
        "Prototyping",
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "bg-indigo-500/10 text-indigo-600",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "bg-orange-500/10 text-orange-600",
      skills: ["React Native", "Expo", "App Store", "Play Store"],
    },
    {
      title: "Cloud & APIs",
      icon: Cloud,
      color: "bg-cyan-500/10 text-cyan-600",
      skills: ["AWS", "Vercel", "Netlify", "Supabase", "Fiebase", "Neon"],
    },
  ];

  return (
    <section className="mt-20 px-5 md:px-0">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            across the full technology stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover border-0 shadow-md h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}
                  >
                    <category.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
