import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Muhammad Awais",
      designation: "Flutter & Mobile Development Expert",
      experience: "3+ years",
      specialization: "Mobile App Development",
      rating: 4.8,
      students: 245,
      courses: ["Flutter App Development"]
    },
    {
      name: "Muhammad Arslan", 
      designation: "Mern Stack Developer",
      experience: "3+ years",
      specialization: "MERN Stack Development",
      rating: 4.9,
      students: 189,
      courses: ["MERN Stack Web Development"]
    },
    {
      name: "Saad Ahamd",
      designation: "Python & Data Science Specialist",
      experience: "3+ years",
      specialization: "Data Science & AI",
      rating: 4.8,
      students: 278,
      courses: ["Python Programming & Data Science"]
    },
    {
      name: "Muhammad Zain",
      designation: "Frontend Development Mentor",
      experience: "3+ years", 
      specialization: "Modern Frontend Technologies",
      rating: 4.7,
      students: 312,
      courses: ["Frontend Development Mastery"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry professionals with years of real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="text-center bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-20 w-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.designation}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.experience} Experience
                  </Badge>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2 text-warning">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{member.rating}</span>
                    <span className="text-muted-foreground">Rating</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    <span>{member.students}+ Students</span>
                  </div>

                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground mb-2">Specialization:</p>
                    <p className="text-sm font-medium">{member.specialization}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;