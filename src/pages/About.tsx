import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, BookOpen, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Students Trained", value: "500+" },
    { icon: BookOpen, label: "Courses Offered", value: "15+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: TrendingUp, label: "Job Placements", value: "450+" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Stars Coaching</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Empowering students with cutting-edge technology education and practical skills 
            to excel in the digital world
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, Stars Coaching emerged from a simple vision: to bridge the gap between 
                traditional education and industry demands. We recognized that students needed more than 
                theoretical knowledge – they needed practical, hands-on experience with the latest technologies.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a small coaching center has now grown into a premier technology education 
                institute, training hundreds of students and helping them secure positions at top tech companies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our success is measured not by the number of students we teach, but by the careers we help 
                launch and the dreams we help achieve.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-lg blur-xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students learning technology"
                className="relative rounded-lg shadow-hover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide world-class technology education that combines theoretical knowledge with 
                  practical application, preparing students for successful careers in the digital economy. 
                  We strive to make quality education accessible and affordable for everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Eye className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading technology education institute in India, known for producing 
                  skilled professionals who drive innovation and contribute to the growth of the tech industry. 
                  We envision a future where every student has the opportunity to excel in technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These numbers represent real people whose lives we've helped transform through education
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Makes Us Different</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry-Relevant Curriculum</h3>
              <p className="text-muted-foreground">
                Our courses are designed in collaboration with industry experts to ensure 
                students learn the most current and in-demand skills.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Attention</h3>
              <p className="text-muted-foreground">
                Small batch sizes ensure every student receives individual attention and 
                mentoring from our experienced instructors.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Support</h3>
              <p className="text-muted-foreground">
                From resume building to interview preparation and job placement assistance, 
                we support students throughout their career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with Stars Coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Explore Courses
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;