import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-serif font-bold text-gradient-gold mb-4">404</h1>
        <p className="text-2xl font-serif text-foreground mb-2">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="luxury" size="lg" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return to Home
            </Link>
          </Button>
          <Button variant="outline-gold" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
