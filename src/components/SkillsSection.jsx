import { useState } from "react";
import {cn} from "@/lib/utils";
const skills = [
  // ==== Frontend Development ====
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Figma (UI/UX)", level: 70, category: "frontend" },

  // ==== Backend Development ====
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "MySQL", level: 75, category: "backend" },
  { name: "REST APIs", level: 75, category: "backend" },

  // ==== Programming & Software Engineering ====
  { name: "Python", level: 90, category: "software" },
  { name: "Machine Learning (Python)", level: 80, category: "software" },
  { name: "C++", level: 95, category: "software" },
  { name: "C#", level: 75, category: "software" },
  { name: "Object-Oriented Programming (OOP)", level: 80, category: "software" },
  { name: "Java Application", level: 80, category: "software" },
  { name: "Unity", level: 80, category: "software" },
  { name: "Data Structure", level: 80, category: "software" },

  // ==== Dev Tools ====
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Linux CLI", level: 80, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "Docker (basic)", level: 75, category: "tools" },

  // ==== IT Support & Infrastructure ====
  { name: "Troubleshooting (Hardware/Software)", level: 90, category: "it" },
  { name: "Windows OS Support", level: 85, category: "it" },
  { name: "Networking Basics", level: 75, category: "it" },
  { name: "System Maintenance", level: 80, category: "it" },
  { name: "Active Directory", level: 75, category: "it" },
  { name: "Ticketing Systems (e.g., Zendesk)", level: 75, category: "it" },
  { name: "CompTIA A+ Knowledge", level: 75, category: "it" }
];

const categories = ["all" , "frontend", "backend" , "software", "tools", "it"];


export const SkillsSection = () =>{
    const [activeCategory, setActiveCategory] = useState ("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory );
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} 
                         onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory=== category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>{category}</button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                        <div>
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}} />

                          
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};