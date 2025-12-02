import { Button } from '@/components/ui/button';
import { Sparkles, Star, Music } from 'lucide-react';

const Hero = () => {
  const scrollToArtists = () => {
    const element = document.getElementById('artists');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Floating Icons */}
      <div className="absolute top-32 left-[15%] animate-float animation-delay-100">
        <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center">
          <Music className="w-5 h-5 text-secondary" />
        </div>
      </div>
      <div className="absolute top-48 right-[20%] animate-float animation-delay-300">
        <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center">
          <Star className="w-4 h-4 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-[25%] animate-float animation-delay-500">
        <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Pakistan's Premier Artist Booking Platform</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-100">
            Book Your Favorite
            <br />
            <span className="text-gradient-gold">Pakistani Artists</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            From legendary Qawwali maestros to chart-topping pop stars, bring the magic of live music to your weddings, corporate events, and private celebrations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" onClick={scrollToArtists}>
              Explore Artists
            </Button>
            {/* <Button variant="outline" size="xl" onClick={scrollToArtists} className="border-border hover:border-secondary">
              View Pricing
            </Button> */}
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border max-w-lg mx-auto animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Artists</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Events</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
