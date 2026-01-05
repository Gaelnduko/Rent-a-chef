import { Heart, Sparkles, Utensils, Globe, Wallet } from "lucide-react";
import homeDining from "@/assets/home-dining.jpg";
import eventsParties from "@/assets/events-parties.jpg";
import healthyCuisine from "@/assets/healthy-cuisine.jpg";
import culturalCuisine from "@/assets/cultural-cuisine.jpg";
import budgetFriendly from "@/assets/budget-friendly.jpg";

const categories = [
  {
    id: 1,
    title: "Home Dining",
    subtitle: "Romantic dinners & family meals",
    description: "Intimate culinary experiences crafted in your kitchen",
    image: homeDining,
    icon: Heart,
    priceFrom: "$120",
  },
  {
    id: 2,
    title: "Events & Parties",
    subtitle: "Birthdays, weddings, private events",
    description: "Unforgettable celebrations with bespoke menus",
    image: eventsParties,
    icon: Sparkles,
    priceFrom: "$85",
  },
  {
    id: 3,
    title: "Healthy & Diet",
    subtitle: "Keto, vegan, diabetic-friendly",
    description: "Nutritious gourmet meals tailored to your needs",
    image: healthyCuisine,
    icon: Utensils,
    priceFrom: "$95",
  },
  {
    id: 4,
    title: "Cultural Cuisine",
    subtitle: "African, Asian, Italian, Swahili",
    description: "Authentic flavors from around the world",
    image: culturalCuisine,
    icon: Globe,
    priceFrom: "$110",
  },
  {
    id: 5,
    title: "Budget Friendly",
    subtitle: "Everyday meals for busy families",
    description: "Quality cooking that fits your lifestyle",
    image: budgetFriendly,
    icon: Wallet,
    priceFrom: "$65",
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Find Your <span className="text-gradient-gold">Perfect Chef</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it's an intimate dinner for two or a grand celebration, 
            we have the perfect culinary artist for every occasion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`category-card rounded-2xl overflow-hidden hover-lift cursor-pointer group ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-1">{category.title}</h3>
                  <p className="text-primary font-medium mb-2">{category.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  
                  {/* Price Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground text-sm">From</span>
                      <span className="price-tag px-3 py-1 rounded-lg text-sm">
                        {category.priceFrom}/person
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium group-hover:underline">
                      View Chefs →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
