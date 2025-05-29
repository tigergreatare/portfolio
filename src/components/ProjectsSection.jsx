import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "./ui/3D Card Effect";
const projects = [
    {
        id: 1,
        title: "2D plateformer Game",
        description: "A fun beautiful 2d game using unity engine and C#",
        image: "/projects/unity 2dgame.png",
        tags: ["Unity", "Object-Oriented Programming (OOP)", "C#"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title : "library management system",
        description :"📚 A simple C++-based Library Management System for managing books, users, and lending records via a console interface. Designed for basic CRUD operations with file handling",
        image :"/projects/console based library management.png",
        tags: ["C++", "Object-Oriented Programming (OOP)", "VS Code", "Git & GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/tigergreatare/c-library-project"
    },
    {
        id: 3,
        title : "crypto currency console app",
        description: "💱 A C++ console-based cryptocurrency tracking system that allows users to manage, view, and analyze crypto data using file operations and basic data structures",
        image: "/projects/Crypto Currency console based.png",
        tags: ["C++", "Object-Oriented Programming (OOP)", "VS Code", "Git & GitHub", "Data Structure"],
        demoUrl: "#",
        githubUrl: "https://github.com/tigergreatare/crypto-currency-cpp",

    },
    {
        id: 4,
        title: "BookMyCar web app",
        description: "🚗 A full-stack Car Rental Management System with a React frontend and Node.js/Express backend. Features car listings, booking, user reviews, and MySQL integration.",
        image: "/projects/BookMyCarApp.png",
        tags: ["MongoDB","Node.js","MySQL","REST APIs","HTML/CSS","JavaScript","React","Figma (UI/UX)","VS Code","Git & GitHub"],
        demoUrl: "#",
        githubUrl: "https://github.com/tigergreatare/car-rental2.0",
    }
]
export const ProjectsSection = () => {
    return (
    <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{" "} Featured <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to details, performance and User Experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
  <CardContainer key={project.id}>
    <CardBody className="group bg-card rounded-lg shadow-xs overflow-hidden w-full">
      {/* ─── image ──────────────────────────────────── */}
      <div className="h-48 overflow-hidden">
        <CardItem translateZ={20}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </CardItem>
      </div>

      {/* ─── content ───────────────────────────────── */}
      <div className="p-6 space-y-4"> {/* <─ this ‘space-y-4’ adds vertical breathing room */}
        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <CardItem key={idx} translateZ={10}>
              <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary-foreground/20">
                {tag}
              </span>
            </CardItem>
          ))}
        </div>

        {/* title */}
        <CardItem translateZ={20}>
          <h3 className="text-xl font-semibold">{project.title}</h3>
        </CardItem>

        {/* description */}
        <CardItem translateZ={15}>
          <p className="text-muted-foreground text-sm">{project.description}</p>
        </CardItem>

        {/* links */}
        <div className="flex gap-4 pt-2">
          {project.demoUrl !== "#" && (
            <CardItem translateZ={15}>
              <a
                href={project.demoUrl}
                target="_blank"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </CardItem>
          )}
          <CardItem translateZ={15}>
            <a
              href={project.githubUrl}
              target="_blank"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          </CardItem>
        </div>
      </div>
    </CardBody>
  </CardContainer>
))}
          </div>
           <div className="text-center mt-12">
            <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/tigergreatare"
            target="_blank"
            >
                Check My Github <ArrowRight size={16} />
            </a>
           </div>

        </div>

    </section>
    );
};