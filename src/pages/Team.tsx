import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Mail, MapPin, Award, BookOpen } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Muhammad Awais",
      role: "Senior Flutter Developer",
      title: "Mobile Development Lead",
      experience: "3+ years",
      specialization: "Cross-Platform Mobile Solutions",
      bio: "Seasoned mobile development professional with expertise in building scalable, high-performance cross-platform applications. Specialized in Flutter ecosystem with proven track record in enterprise mobile solutions.",
      courses: ["Advanced Flutter Development", "Mobile Architecture Patterns"],
      technologies: ["Flutter", "Dart", "Firebase", "iOS", "Android", "REST APIs"],
      achievements: "50+ Apps Deployed",
      location: "Rawalpindi, PK"
    },
    {
      name: "Muhammad Arslan",
      role: "Full Stack Engineer",
      title: "MERN Stack Architect",
      experience: "3+ years",
      specialization: "Enterprise Web Applications",
      bio: "Expert full-stack developer focused on creating robust, scalable web applications using modern JavaScript technologies. Experienced in cloud deployment and microservices architecture.",
      courses: ["Advanced MERN Development", "System Architecture Design"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS", "Docker"],
      achievements: "30+ Projects Delivered",
      location: "Rawalpindi, PK"
    },
    {
      name: "Saad Ahmad",
      role: "Data Science Consultant",
      title: "AI & Analytics Specialist",
      experience: "3+ years",
      specialization: "Machine Learning & Data Analytics",
      bio: "Data science professional with deep expertise in statistical analysis, machine learning model development, and business intelligence solutions. Proven experience in transforming data into actionable insights.",
      courses: ["Advanced Python & ML", "Data Engineering Fundamentals"],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "SQL"],
      achievements: "25+ ML Models Deployed",
      location: "Rawalpindi, PK"
    },
    {
      name: "Muhammad Zain",
      role: "UI/UX Developer",
      title: "Frontend Architecture Lead",
      experience: "3+ years",
      specialization: "Modern Frontend Ecosystems",
      bio: "Frontend specialist dedicated to crafting exceptional user experiences through modern web technologies. Expert in responsive design principles and performance optimization.",
      courses: ["Modern Frontend Mastery", "UI/UX Design Principles"],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Framer"],
      achievements: "40+ Interfaces Built",
      location: "Rawalpindi, PK"
    },
  ];

  // Function to get first two letters from name
  const getInitials = (name: string) =>
    name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Industry professionals and passionate educators committed to delivering 
              world-class technical education and mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 border-0 group"
              >
                {/* Header Section */}
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 h-32">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative p-6 flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-blue-100 font-medium">{member.title}</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-lg font-bold border-2 border-white/30">
                      {getInitials(member.name)}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Role and Experience */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                      {member.role}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-1" />
                      {member.experience}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Specialization */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                      Specialization
                    </h4>
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200">
                      {member.specialization}
                    </Badge>
                  </div>

                  {/* Key Achievement */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievement</h4>
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {member.achievements}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Courses */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Teaching Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.courses.map((course, idx) => (
                        <Badge 
                          key={idx} 
                          className="text-xs bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                    <div className="flex space-x-3">
                      <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-200" />
                      <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
                      <Mail className="h-5 w-5 text-gray-400 hover:text-green-600 cursor-pointer transition-colors duration-200" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;