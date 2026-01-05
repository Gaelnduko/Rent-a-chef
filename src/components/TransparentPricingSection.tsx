import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    name: "Intimate",
    description: "Perfect for romantic dinners & small gatherings",
    guests: "2-4 guests",
    pricePerPerson: "$95",
    features: [
      "3-course curated menu",
      "Fresh ingredient sourcing",
      "Table setting & presentation",
      "2-hour dining experience",
      "Post-meal kitchen cleanup",
    ],
    popular: false,
  },
  {
    name: "Celebration",
    description: "Ideal for birthdays, anniversaries & dinner parties",
    guests: "5-10 guests",
    pricePerPerson: "$125",
    features: [
      "4-course gourmet menu",
      "Premium ingredient selection",
      "Custom menu consultation",
      "Wine pairing recommendations",
      "3-hour dining experience",
      "Full kitchen cleanup",
      "Personalized menu cards",
    ],
    popular: true,
  },
  {
    name: "Grand Event",
    description: "For weddings, corporate events & large celebrations",
    guests: "11-50 guests",
    pricePerPerson: "$85",
    features: [
      "5-course bespoke menu",
      "Full catering service",
      "Service staff included",
      "Event coordination",
      "Custom dietary accommodations",
      "4+ hour service",
      "Complete setup & cleanup",
      "Dedicated event manager",
    ],
    popular: false,
  },
];

const TransparentPricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">100% Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Simple, <span className="text-gradient-gold">Honest</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprise charges. What you see is what you pay. 
            Every price includes the chef, ingredients, and complete service.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl overflow-hidden hover-lift ${
                tier.popular 
                  ? "border-2 border-primary shadow-gold" 
                  : "card-luxury"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-gold text-primary-foreground text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${tier.popular ? "pt-14" : ""}`}>
                {/* Tier Name */}
                <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>

                {/* Guest Count */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-secondary/50 text-sm mb-6">
                  <Star className="w-3 h-3 text-primary" />
                  <span>{tier.guests}</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-serif font-bold text-gradient-gold">
                    {tier.pricePerPerson}
                  </span>
                  <span className="text-muted-foreground">/person</span>
                </div>

                {/* Divider */}
                <div className="divider-gold mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  variant={tier.popular ? "hero" : "outline-gold"} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom quote? Dietary requirements? Special requests?
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Contact us for personalized pricing →
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>No booking fees</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Free cancellation 48h before</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Secure payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            <span>Verified chefs only</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparentPricingSection;
