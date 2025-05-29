import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
            {projects.map((project, key) =>(
                <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transfomr duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                              <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary-foreground">{tag}</span>
                             

                          ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4">
                            <a href={project.demoUrl} 
                            target="_blank"
                            className="text-foreground/80 hove:text-primary transition-colors duration-300">
                                <ExternalLink size ={20}/>
                            </a>
                            <a href={project.githubUrl} 
                            target="_blank"
                             className="text-foreground/80 hove:text-primary transition-colors duration-300">
                                <Github size ={20}/>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
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