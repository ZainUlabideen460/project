import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="h-28 w-40">
                <img 
              src="/Stars Coaching Logo Design (1).png" 
              alt="Stars Coaching Logo" 
              className="h-20 w-40"
            />
              {/* <span className="text-xl font-bold">Stars Coaching</span> */}
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students with cutting-edge technology education. 
              Your journey to a successful tech career starts here.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-accent transition-colors">All Courses</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-accent transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/course/flutter-development" className="hover:text-accent transition-colors">Flutter Development</Link></li>
              <li><Link to="/course/mern-stack" className="hover:text-accent transition-colors">MERN Stack</Link></li>
              <li><Link to="/course/python-programming" className="hover:text-accent transition-colors">Python Programming</Link></li>
              <li><Link to="/course/frontend-development" className="hover:text-accent transition-colors">Frontend Development</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>shamsabad rawalpindi</span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <a 
                  href="https://wa.me/923325326149" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-accent transition-colors cursor-pointer group"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="hover:underline">+92 332 5326149</span>
                </a>
                <a 
                  href="https://wa.me/923257875721" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-accent transition-colors cursor-pointer group"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="hover:underline">+92 325 7875721</span>
                </a>
              </div>

              <a 
                href="mailto:starscoaching.site@gmail.com" 
                className="flex items-center space-x-3 hover:text-accent transition-colors cursor-pointer group"
              >
                <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="hover:underline">starscoaching.site@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Stars Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;