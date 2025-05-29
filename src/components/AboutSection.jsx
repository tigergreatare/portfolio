import { Code, User, Settings } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-8xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left Side: Description */}
          <div className="space-y-6">
            <h3>
              Passionate about empowering users through IT support while building powerful web and software solutions that shape the future.
            </h3>
            <p className="text-muted-foreground">
              I started my journey in tech with a strong focus on IT support—solving technical issues, improving system reliability, and helping people stay productive. Through real-world experience and certifications, I’ve built a solid foundation in diagnostics, troubleshooting, and tech operations.
            </p>
            <p className="text-muted-foreground">
              But my passion doesn't stop there. I'm equally drawn to the creative and logical challenges of software development and web engineering. Whether it’s building clean, user-focused interfaces or crafting efficient backend logic, I thrive when coding. While the job market is competitive, I'm determined to grow into a software engineering role—starting where I can, but always aiming higher.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">Get In Touch</a>
              <a
                href=""
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side: Two Columns (IT + Software) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* IT Support Column */}
            <div className="space-y-6">
              <div className="gradient-border p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">IT Support</h4>
                    <p className="text-muted-foreground">
                      Troubleshooting systems, assisting users, and keeping infrastructure reliable and efficient.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Tech Operations</h4>
                    <p className="text-muted-foreground">
                      Experienced in system maintenance, software installation, and real-time technical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Software/Dev Column */}
            <div className="space-y-6">
              <div className="gradient-border p-8 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Software Development</h4>
                    <p className="text-muted-foreground">
                      Building responsive web apps, efficient backend systems, and elegant user experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Future-Focused</h4>
                    <p className="text-muted-foreground">
                      Merging IT expertise with software skills to build a strong foundation for a career in engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
