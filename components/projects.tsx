"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      name: "Stack Vision VTU Platform",
      description:
        "A comprehensive VTU (Virtual Top-Up) platform with real-time transactions, wallet management, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      role: "Full-Stack Developer & Founder",
      category: "Full-Stack",
      github: "https://github.com",
      live: "https://stackvision.com",
      status: "Active",
    },
    {
      name: "E-Commerce Dashboard",
      description:
        "Modern admin dashboard for e-commerce management with analytics, inventory tracking, and order management.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      role: "Frontend Developer",
      category: "Frontend",
      github: "https://github.com",
      live: "https://demo.com",
      status: "Completed",
    },
    {
      name: "Mobile Banking App",
      description:
        "React Native mobile application for digital banking with biometric authentication and real-time notifications.",
      tech: ["React Native", "Expo", "Firebase", "TypeScript"],
      role: "Mobile Developer",
      category: "Mobile",
      github: "https://github.com",
      live: null,
      status: "In Progress",
    },
    {
      name: "API Gateway Service",
      description:
        "Microservices API gateway with rate limiting, authentication, and request routing capabilities.",
      tech: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      role: "Backend Developer",
      category: "Backend",
      github: "https://github.com",
      live: "https://api-demo.com",
      status: "Completed",
    },
  ];

  const filters = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-600 border-green-500/20";
      case "Completed":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20";
      case "In Progress":
        return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    }
  };

  return (
    <section className="section-padding mt-20 px-5 md:px-0">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work across different technologies and
            platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="card-hover border-0 shadow-md h-full flex flex-col"
            >
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-lg line-clamp-2">
                    {project.name}
                  </CardTitle>
                  <Badge
                    className={`text-xs ${getStatusColor(project.status)}`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
                <div className="mt-3">
                  <p className="text-sm font-medium text-primary mb-2">
                    {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0"></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
