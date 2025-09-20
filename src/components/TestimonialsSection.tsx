import { Star } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    content: "Potrex helped me save $3,000 in just 6 months by showing me exactly where my money was going. The insights are incredible!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b4d7?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Manager", 
    content: "I finally broke my impulse buying habit thanks to Potrex's smart notifications. It's like having a financial advisor in my pocket.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    content: "The goal-setting feature is amazing. I saved up for my dream vacation faster than I ever thought possible!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <AnimatedGroup preset="blur-slide" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            What our users are <span className="italic">saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of people who have transformed their financial habits with Potrex.
          </p>
        </AnimatedGroup>

        <AnimatedGroup preset="blur-slide" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="backdrop-blur-md bg-glass/40 border border-white/20 rounded-2xl p-6 shadow-glass">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default TestimonialsSection;