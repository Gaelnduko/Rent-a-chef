import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-gradient-gold">
              PrivéChef
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors">
              Browse Chefs
            </a>
            <a href="#stories" className="text-foreground/80 hover:text-primary transition-colors">
              Chef Stories
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="luxury" size="lg">
              Book a Chef
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-slide-up">
            <div className="flex flex-col gap-4">
              <a href="#categories" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Browse Chefs
              </a>
              <a href="#stories" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Chef Stories
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-primary transition-colors py-2">
                Pricing
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors py-2">
                About
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                <Button variant="ghost" size="icon">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="luxury" className="flex-1">
                  Book a Chef
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
