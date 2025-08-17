import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["shamsabad rawalpindi"],
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 332 5326149", "+92 325 7875721"],
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["starscoaching.site@gmail.com"],
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "text-success"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to start your learning journey? We're here to help you choose the right course 
            and answer all your questions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-gradient-card hover:shadow-hover transition-all duration-300 animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-muted ${info.color}`}>
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="p-4 bg-gradient-card">
                <CardContent className="p-0">
                  <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">
                        Visit us at our Tech Hub location
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-gradient-card shadow-hover">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course">Interested Course</Label>
                      <select className="w-full p-3 border border-input rounded-md bg-background">
                        <option value="">Select a course</option>
                        <option value="flutter">Flutter Development</option>
                        <option value="mern">MERN Stack</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="backend">Backend Development</option>
                        <option value="python">Python Programming</option>
                        <option value="office">MS Office Suite</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your goals and any questions you have..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our courses and enrollment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-card">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">What are the course timings?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer flexible timings including morning, evening, and weekend batches. 
                  Online classes are also available for remote learning.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Do you provide placement assistance?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we provide comprehensive placement support including resume building, 
                  interview preparation, and direct connections with hiring partners.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">Are there any prerequisites?</h3>
                <p className="text-muted-foreground text-sm">
                  Most of our courses are designed for beginners. Basic computer knowledge 
                  is helpful but not mandatory. We'll guide you from the basics.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <CardContent className="p-0">
                <h3 className="font-semibold mb-3">What about certification?</h3>
                <p className="text-muted-foreground text-sm">
                  You'll receive industry-recognized certificates upon course completion, 
                  along with project portfolios to showcase your skills to employers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;