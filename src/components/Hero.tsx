import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Master Technology with 
              <span className="block bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
                Expert Guidance
              </span>
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Transform your career with our comprehensive courses in app development, 
              web technologies, and essential digital skills. Join thousands of successful graduates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Free Demo Class
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-white/90">
              <div className="text-center animate-fade-in-scale">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Students Trained</div>
              </div>
              <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Courses Available</div>
              </div>
              <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-xl" />
              <img 
                src={heroImage} 
                alt="Students learning technology" 
                className="relative rounded-lg shadow-glow w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;