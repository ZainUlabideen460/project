import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to know more about your courses and enrollment process.";
    const whatsappUrl = `https://wa.me/923325326149?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+923325326149', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:starscoaching.site@gmail.com', '_self');
  };

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your learning journey? Contact us today for course details and enrollment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center bg-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground mb-3">+92 332 5326149</p>
              <p className="text-sm text-muted-foreground mb-3">+92 325 7875721</p>

              <Button variant="outline" size="sm" onClick={handleCall}>
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-3">Quick Response</p>
              <Button variant="outline" size="sm" onClick={handleWhatsApp}>
                Chat Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-3">starscoaching.site@gmail.com</p>
              <Button variant="outline" size="sm" onClick={handleEmail}>
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="h-12 w-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground mb-3">Coaching Center</p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="max-w-md mx-auto bg-gradient-primary text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Ready to Start Learning?</h3>
              <p className="text-white/90 text-sm mb-4">
                Join our community of successful students and transform your career today!
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;