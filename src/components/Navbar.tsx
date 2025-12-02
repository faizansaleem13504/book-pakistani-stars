import { useState } from 'react';
import { Menu, X, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src='/hiresinger_logo.png' className="w-10 h-10 rounded-lg text-secondary-foreground" />
            <span className="font-serif text-xl md:text-2xl font-bold">
              Hire<span className="text-gradient-gold">Singer</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('artists')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Artists
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </button>
            <Button variant="gold" size="sm" onClick={() => scrollToSection('artists')}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('artists')}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Artists
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button variant="gold" className="w-full mt-2" onClick={() => scrollToSection('artists')}>
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
