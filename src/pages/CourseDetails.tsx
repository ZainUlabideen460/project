import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock, Users, BookOpen, CheckCircle, Phone } from "lucide-react";
import { courses } from "@/data/courses";

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const handleEnrollNow = () => {
    const message = `Hi! I'm interested in enrolling for the ${course.title} course. Can you please provide more details?`;
    const whatsappUrl = `https://wa.me/923325326149?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="bg-success text-success-foreground mb-4">
              {course.discount}% OFF - Limited Time
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
            <p className="text-xl text-white/90 mb-8">{course.description}</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/90 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{course.students} Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-warning text-warning" />
                <span>{course.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>{course.level}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-3xl font-bold">₹{course.price}</span>
                  <span className="text-lg line-through text-white/60">₹{course.originalPrice}</span>
                </div>
                <p className="text-sm text-white/80">One-time payment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Course Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Outline */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Course Outline</h2>
                  <div className="space-y-3">
                    {course.outline.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Course Features */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">What You'll Get</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Instructor */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{course.instructor}</h3>
                      <p className="text-muted-foreground">Expert {course.category} Instructor</p>
                      <p className="text-sm text-muted-foreground mt-1">5+ years of industry experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary">₹{course.price}</span>
                      <span className="text-lg line-through text-muted-foreground">₹{course.originalPrice}</span>
                    </div>
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      Save ₹{course.originalPrice - course.price}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={handleEnrollNow}
                      className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 text-lg"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Enroll via WhatsApp
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">
                        Join {course.students}+ students already enrolled
                      </p>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="font-medium">{course.level}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium">{course.category}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetails;