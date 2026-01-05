import { Star, Heart, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import chef1 from "@/assets/chef-1.jpg";
import chef2 from "@/assets/chef-2.jpg";
import chef3 from "@/assets/chef-3.jpg";
import chef4 from "@/assets/chef-4.jpg";

const chefStories = [
  {
    id: 1,
    name: "Chef Marcus Okonkwo",
    specialty: "Swahili & African Fusion",
    image: chef1,
    story: "Food is my love language. Growing up in Nairobi, my grandmother taught me that every dish tells a story of heritage and heart.",
    whyICook: "I cook to connect cultures and create memories that last generations.",
    signatureDish: "Nyama Choma with Coconut Rice",
    rating: 4.9,
    reviews: 87,
    price: "$130",
    hasVideo: true,
  },
  {
    id: 2,
    name: "Chef Mei Lin",
    specialty: "Contemporary Asian",
    image: chef2,
    story: "After training in Tokyo and Shanghai, I discovered my passion lies in bringing the delicate art of Asian cuisine to intimate home settings.",
    whyICook: "To transform simple ingredients into moments of pure joy.",
    signatureDish: "Hand-pulled Noodles with Miso Glaze",
    rating: 5.0,
    reviews: 124,
    price: "$145",
    hasVideo: true,
  },
  {
    id: 3,
    name: "Chef Antonio Rossi",
    specialty: "Authentic Italian",
    image: chef3,
    story: "Three generations of pasta makers in my family. Every recipe I prepare carries the soul of the Amalfi Coast.",
    whyICook: "Because food without love is just sustenance.",
    signatureDish: "Fresh Truffle Tagliatelle",
    rating: 4.8,
    reviews: 156,
    price: "$155",
    hasVideo: false,
  },
  {
    id: 4,
    name: "Chef Sofia Martinez",
    specialty: "Plant-Based Gourmet",
    image: chef4,
    story: "I believe luxury and sustainability can coexist. My plant-based creations prove that healthy eating never compromises on taste.",
    whyICook: "To show the world that compassionate cooking is the future of fine dining.",
    signatureDish: "Truffle Mushroom Wellington",
    rating: 4.9,
    reviews: 93,
    price: "$125",
    hasVideo: true,
  },
];

const ChefStoriesSection = () => {
  return (
    <section id="stories" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Chef <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond the kitchen, every chef has a story. Discover the passion, 
            heritage, and artistry behind your next culinary experience.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {chefStories.map((chef) => (
            <div
              key={chef.id}
              className="card-luxury rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Chef Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card to-transparent" />
                  
                  {/* Video Play Button */}
                  {chef.hasVideo && (
                    <button className="absolute inset-0 flex items-center justify-center group/play">
                      <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center backdrop-blur-sm group-hover/play:bg-primary/30 transition-colors">
                        <Play className="w-6 h-6 text-primary fill-primary" />
                      </div>
                    </button>
                  )}

                  {/* Favourite Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Heart className="w-5 h-5 text-foreground hover:text-primary" />
                  </button>
                </div>

                {/* Chef Info */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-serif font-bold">{chef.name}</h3>
                      <p className="text-primary text-sm">{chef.specialty}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium">{chef.rating}</span>
                      <span className="text-muted-foreground text-sm">({chef.reviews})</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-primary/30 absolute -top-1 -left-1" />
                    <p className="text-muted-foreground text-sm italic pl-6">
                      {chef.story}
                    </p>
                  </div>

                  {/* Why I Cook */}
                  <div className="mb-4">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Why I Cook</span>
                    <p className="text-sm text-foreground/90 mt-1">{chef.whyICook}</p>
                  </div>

                  {/* Signature Dish */}
                  <div className="mb-6">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">Signature Dish</span>
                    <p className="text-sm text-foreground/90 mt-1">{chef.signatureDish}</p>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-muted-foreground text-sm">From </span>
                      <span className="text-xl font-serif font-bold text-gradient-gold">{chef.price}</span>
                      <span className="text-muted-foreground text-sm">/person</span>
                    </div>
                    <Button variant="luxury" size="sm">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline-gold" size="lg">
            View All Chef Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChefStoriesSection;
