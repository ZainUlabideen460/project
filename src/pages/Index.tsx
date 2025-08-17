import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses, categories } from "@/data/courses";
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [currentReview, setCurrentReview] = useState(0);

  const filteredCourses = selectedCategory === "All Courses" 
    ? courses.slice(0, 6) 
    : courses.filter(course => course.category === selectedCategory).slice(0, 6);

  const reviews = [
    {
      name: "Ankit Sharma",
      course: "MERN Stack Development",
      rating: 5,
      text: "Excellent teaching methodology! The instructors made complex concepts easy to understand. I landed my dream job as a full-stack developer.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Verma",
      course: "Flutter Development",
      rating: 5,
      text: "The hands-on approach and real-world projects helped me build a strong portfolio. Now I'm working at a top mobile app development company.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      course: "Python Programming",
      rating: 5,
      text: "From zero programming knowledge to getting placed in a data science role. The support from instructors was amazing throughout the journey.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <Layout>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Stars Coaching?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide industry-relevant education with practical experience and job placement support
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 animate-fade-in-scale">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">Learn from industry professionals with years of real-world experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Job Placement</h3>
                <p className="text-muted-foreground">95% placement rate with dedicated career support and interview preparation</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
                <p className="text-muted-foreground">Live classes, recorded sessions, and flexible timings to fit your schedule</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular courses designed to advance your career in technology
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button variant="cta" size="lg" className="group">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <TeamSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};

export default Index;
