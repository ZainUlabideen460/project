import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BookOpen } from "lucide-react";
import { Course } from "@/data/courses";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-border hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in-scale">
      <div className="relative">
        <img 
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-success text-success-foreground">
            {course.discount}% OFF
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 text-foreground">
            {course.level}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <Badge variant="outline" className="text-xs">
            {course.category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.students}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            {course.rating}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">₹{course.price}</span>
            <span className="text-sm line-through text-muted-foreground">₹{course.originalPrice}</span>
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground mb-4">
          <span className="font-medium">Instructor:</span> {course.instructor}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="w-full space-y-2">
          <Link to={`/course/${course.id}`} className="w-full">
            <Button variant="course" className="w-full group">
              <BookOpen className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
          <Button 
            variant="cta" 
            className="w-full"
            onClick={() => {
              const message = `Hi! I'm interested in enrolling for the ${course.title} course. Can you please provide more details?`;
              const whatsappUrl = `https://wa.me/918825592070?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            Enroll Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;