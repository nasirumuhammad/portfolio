import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      color: "text-blue-500",
      description:
        "Proficient in modern web technologies and mobile development",
    },
    {
      icon: Zap,
      color: "text-purple-500",

      title: "Stack Vision Founder",
      description: "Building innovative VTU solutions and scalable platforms",
    },
    {
      icon: Users,
      color: "text-amber-500",

      title: "Client-Focused",
      description: "Delivering intuitive UIs and robust backend systems",
    },
    {
      icon: Award,
      color: "text-blue-500",

      title: "Quality Driven",
      description: "Test-driven development with Docker and modern DevOps",
    },
  ];

  return (
    <section className="section-padding md:py-10 px-5 md:px-0 md:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center flex-col md:flex-row gap-10">
          {/* Content */}
          <div className="space-y-4 w-full md:w-[60%]">
            <h2 className="text-3xl lg:text-4xl font-bold  text-center">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              I'm a full-stack software developer specializing in scalable,
              user-centered web and mobile applications. Proficient in React,
              Node.js, and modern databases, I focus on delivering clean,
              practical solutions with emphasis on accessibility, performance,
              and reliability." Let me know if you'd like any adjustments!
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="">
                <CardContent className="p-6 ">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
