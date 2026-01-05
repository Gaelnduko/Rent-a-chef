import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Eye, ChefHat, Award, Utensils } from "lucide-react";
import logo from "@/assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <img 
              src={logo} 
              alt="Rent a Chef Logo" 
              className="w-32 h-32 mx-auto mb-8 object-contain"
            />
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              Our Story
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              Bringing <span className="text-gradient-gold">Restaurant Excellence</span>
              <br />to Your Home
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We connect people with trusted local chefs for home dining and private events, 
              making it easy to enjoy restaurant-quality meals in your own space.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { number: "500+", label: "Verified Chefs" },
              { number: "10K+", label: "Happy Customers" },
              { number: "25+", label: "Cuisines" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-2xl border border-border/50"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-gradient-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                Founder's Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">
                Born from a <span className="text-gradient-gold">Passion</span> for 
                Memorable Dining
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It started with a simple question: "Why can't we enjoy world-class 
                  dining experiences at home?" I found myself constantly wishing for 
                  the intimacy of home combined with the excellence of fine dining.
                </p>
                <p>
                  After years of working in the hospitality industry, I witnessed 
                  countless talented chefs who dreamed of sharing their craft beyond 
                  restaurant walls. At the same time, I met families who wanted to 
                  celebrate special moments without the hassle of cooking or the 
                  formality of restaurants.
                </p>
                <p>
                  That's when <strong className="text-foreground">Rent a Chef</strong> was born — 
                  a platform that bridges this gap. We're not just booking chefs; 
                  we're creating memories. Every meal tells a story, and we believe 
                  everyone deserves that magic in their own home.
                </p>
                <p className="italic text-primary">
                  "Great food brings people together. Our mission is to make those 
                  moments accessible to everyone."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-background" />
                </div>
                <div>
                  <div className="font-serif font-bold text-lg">Sarah Mitchell</div>
                  <div className="text-sm text-muted-foreground">Founder & CEO</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  <div className="text-center p-8 relative z-10">
                    <img 
                      src={logo} 
                      alt="Rent a Chef" 
                      className="w-48 h-48 mx-auto mb-6 object-contain"
                    />
                    <div className="text-2xl font-serif text-gradient-gold font-bold">
                      Est. 2024
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Crafting culinary experiences
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Our <span className="text-gradient-gold">Mission & Vision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group relative p-8 md:p-10 bg-card rounded-3xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To democratize fine dining by connecting passionate chefs with 
                  families and individuals who seek extraordinary culinary experiences 
                  in the comfort of their own spaces.
                </p>
                <ul className="space-y-3">
                  {[
                    "Make private chef services accessible to everyone",
                    "Support local chefs in building their culinary careers",
                    "Create transparent, trust-based connections",
                    "Deliver consistently exceptional dining experiences",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative p-8 md:p-10 bg-card rounded-3xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-accent/50">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A world where every celebration, every family dinner, and every 
                  special moment can be elevated by the magic of a personal chef — 
                  affordable, accessible, and always memorable.
                </p>
                <ul className="space-y-3">
                  {[
                    "Become the global standard for private chef booking",
                    "Build a thriving community of culinary professionals",
                    "Transform how people experience dining at home",
                    "Set new standards for service and quality",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Our Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              What We <span className="text-gradient-gold">Stand For</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Passion First",
                description: "Every chef we partner with shares our love for creating unforgettable dining moments.",
              },
              {
                icon: Users,
                title: "Community",
                description: "We build bridges between talented chefs and families, fostering lasting connections.",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Only the finest, vetted chefs make it onto our platform. Quality is non-negotiable.",
              },
              {
                icon: Utensils,
                title: "Transparency",
                description: "No hidden fees, no surprises. Clear pricing and honest communication always.",
              },
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-background rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Experience the <span className="text-gradient-gold">Magic</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've transformed their home dining 
            experience with Rent a Chef.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" className="text-lg px-8">
              Browse Chefs
            </Button>
            <Button variant="outline-gold" size="lg" className="text-lg px-8">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
