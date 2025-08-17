import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
  {
    name: "Muhammad Awais",
    role: "Flutter & Mobile Development Expert",
    experience: "3+ years",
    specialization: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Expert in Flutter and native mobile development with strong experience building cross-platform apps.",
    courses: ["Flutter App Development"],
    technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android"]
  },
  {
    name: "Muhammad Arslan",
    role: "MERN Stack Developer",
    experience: "3+ years",
    specialization: "MERN Stack Development",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    bio: "Full-stack developer specializing in building scalable and secure MERN applications.",
    courses: ["MERN Stack Web Development"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"]
  },
  {
    name: "Saad Ahmad",
    role: "Python & Data Science Specialist",
    experience: "3+ years",
    specialization: "Data Science & AI",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "Data Science instructor with expertise in Python, data analytics, and machine learning pipelines.",
    courses: ["Python Programming & Data Science"],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
  },
  {
    name: "Muhammad Zain",
    role: "Frontend Development Mentor",
    experience: "3+ years",
    specialization: "Modern Frontend Technologies",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Frontend mentor passionate about teaching responsive design, modern frameworks, and UI/UX best practices.",
    courses: ["Frontend Development Mastery"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"]
  }
];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Expert Team</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Meet the passionate educators and industry professionals who make learning 
            at Stars Coaching an exceptional experience
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {member.experience}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Specialization:</h4>
                    <Badge variant="outline" className="text-xs">
                      {member.specialization}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Courses:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.courses.map((course, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4 border-t border-border">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Our Team Stands Out</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our instructors bring real-world experience and passion for teaching to every class
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">5+</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Years Experience</h3>
              <p className="text-muted-foreground">
                Each instructor has minimum 5 years of industry experience in their domain
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Professionals</h3>
              <p className="text-muted-foreground">
                All our instructors are working professionals from top tech companies
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Student Support</h3>
              <p className="text-muted-foreground">
                Dedicated mentorship and support available whenever you need it
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;