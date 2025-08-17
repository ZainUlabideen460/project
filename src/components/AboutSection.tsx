import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, BookOpen, TrendingUp, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Students Trained",
      description: "Successfully transformed careers"
    },
    {
      icon: BookOpen,
      number: "15+",
      label: "Courses Available",
      description: "Comprehensive technology curriculum"
    },
    {
      icon: Award,
      number: "4.9",
      label: "Average Rating",
      description: "Consistently excellent feedback"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Students achieving their goals"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Goal-Oriented Learning",
      description: "Every course is designed with clear objectives and practical outcomes to ensure student success."
    },
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "We prioritize individual attention and personalized support for every learner's journey."
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Our curriculum is constantly updated to match current industry standards and demands."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">About Stars Coaching</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Empowering Futures Through Technology Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Stars Coaching, we believe in transforming lives through quality education. 
            With expert instructors, hands-on projects, and industry-relevant curriculum, 
            we prepare students for successful careers in technology.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.label}
              className="text-center bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <achievement.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <h3 className="font-semibold mb-2">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide world-class technology education that bridges the gap between 
                theoretical knowledge and practical industry skills. We are committed to 
                nurturing talent and creating opportunities for students to excel in their 
                chosen technology domains.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Quality education with practical focus
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Industry-relevant curriculum
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Personal mentorship and support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To become the leading technology education institute that empowers 
                individuals to achieve their career aspirations through innovative 
                learning methodologies and comprehensive skill development programs.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Transform careers through technology
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Create industry-ready professionals
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  Foster innovation and creativity
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="text-center bg-card border-border hover:shadow-hover transition-all duration-300 animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join Stars Coaching today and become part of our success story. 
                With expert guidance, practical projects, and industry connections, 
                your dream career in technology is just a step away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;