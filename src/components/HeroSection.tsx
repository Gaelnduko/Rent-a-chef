import { Button } from "@/components/ui/button";
import { Star, Award, Clock, Play } from "lucide-react";
import chefOfWeek from "@/assets/chef-of-week.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={chefOfWeek}
          alt="Chef of the Week"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          {/* Chef of the Week Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Chef of the Week</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 animate-slide-up">
            Experience
            <span className="block text-gradient-gold">Culinary Excellence</span>
            At Home
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Book world-class private chefs for intimate dinners, family gatherings, 
            and unforgettable events. Transparent pricing, no hidden fees.
          </p>

          {/* Chef Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-foreground font-medium">5.0</span>
              <span className="text-muted-foreground">(128 reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>15+ years experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Book Chef Isabella
            </Button>
            <Button variant="outline-gold" size="xl" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Story
            </Button>
          </div>

          {/* Transparent Pricing Badge */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-muted-foreground">Starting from</span>
            <span className="text-3xl font-serif font-bold text-gradient-gold">$150</span>
            <span className="text-muted-foreground">per person</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
