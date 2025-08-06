import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className=" mt-[10vh] md:mt-[20vh] px-5 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-0 gap-6 justify-between items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-hero-text leading-tight text-green-500">
                Hi
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-hero-text">
                  I'm Muhammad Nasiru
                </h2>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  Full-Stack Web & Mobile Developer
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg">
                I architect full-stack web and mobile apps combining
                performance, scalability, and great user experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <a href="http://wa.me/+2348101418633">
              <div className="flex flex-col items-center justify-center  sm:flex-row gap-4">
                <Button size="lg" className="bg-green-500 w-full md:w-[70%]">
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Contact Me
                </Button>
              </div>
            </a>
          </div>

          {/* Profile Image */}
          <div className="relative w-full md:w-[50%] px-5  mt-[5vh] md:mt-0">
            <img
              src="/profile-image.jpg"
              alt="Muhammad Nasiru - Full-Stack Developer"
              className="w-full h-auto rounded-xl shadow-lg hidden md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
