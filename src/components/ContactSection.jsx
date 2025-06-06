import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react"
import { cn } from "../lib/utils"
import { useToast } from "../hooks/use-toast"
import { useState } from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
export const ContactSection =() =>{
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    // 1️⃣  Build the array that FloatingDock expects
  const socialLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/alaa-sbai-abbassi-371055330/",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/ali_sbai_ne/",
      icon: (
        <Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/channel/UCkvGvYCP_zyooK2dQwFECAw",
      icon: (
        <Youtube className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
    },
  ];
   const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true);
    setTimeout(() => {
     toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
     })
     setIsSubmitting(false);
    }, 1500);
    
   }

    return <section 
     id="contact"
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center tex-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new Opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> 
                    Contact Information
                    </h3>
                <div className="space-y-6 justify-center">
                 <div className="flex items-start space-x-4">
                   <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary"/>{" "}
                   </div>
                   <div>
                    <h4> Email</h4>
                    <a href="mailto:alaasbai77@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        alaasbai77@gmail.com
                    </a>
                   </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary"/>{" "}
                   </div>
                   <div>
                    <h4> Phone</h4>
                    <a href="tel:+16138702739" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (613) 870 2739
                    </a>
                   </div>
                 </div>
                 <div className="flex items-start space-x-4">
                   <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                   </div>
                   <div>
                    <h4> Location</h4>
                    <a  className="text-muted-foreground hover:text-primary transition-colors">
                        Cornwall, On, Canada
                    </a>
                   </div>
                 </div>
                </div>
                <div className="pt-8">
                   <h4 className="font-medium mb-4"> Connect With Me</h4>
                   <FloatingDock
                items={socialLinks}
                desktopClassName="justify-center"
                mobileClassName="translate-y-6"
              />
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs"
                 onSubmit={handleSubmit}
            >
                <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                <form className="space-y-6"
                 action="https://formspree.io/f/manorgvp"
                 method="POST"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            {" "}
                             Your Name</label>
                        <input type="text"
                               id="name"
                               name="name"
                               required
                               className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"  
                               placeholder="Alaa Sbai..." 
                        />
                    </div>
                   <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            {" "}
                             Your Email</label>
                        <input type="email"
                               id="email"
                               name="email"
                               required
                               className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"  
                               placeholder="pablo@gmail.com" 
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            {" "}
                             Your Message</label>
                        <textarea 
                               id="message"
                               name="message"
                               required
                               className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"  
                               placeholder="Hello, I'd like to talk about..." 
                        />
                    </div>
                    <button type="submit" 
                            disabled={isSubmitting}
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                    )}> 
                    {isSubmitting ? "Sending.." : "Send Message"}
                     <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
        </div>
    </section>
}