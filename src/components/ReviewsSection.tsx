import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { useEffect, useState } from "react";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + reviewsPerPage) >= reviews.length ? 0 : prevIndex + reviewsPerPage
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their careers with our courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentReviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="bg-card border-border hover:shadow-hover transition-all duration-300 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-warning">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'fill-current' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-muted-foreground">
                    {review.rating}/5
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-4">
                  "{review.comment}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      {review.designation && (
                        <p className="text-xs text-muted-foreground">{review.designation}</p>
                      )}
                      <p className="text-xs text-primary font-medium">{review.course}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex space-x-2">
            {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / reviewsPerPage) === index
                    ? 'bg-primary'
                    : 'bg-muted'
                }`}
                onClick={() => setCurrentIndex(index * reviewsPerPage)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;