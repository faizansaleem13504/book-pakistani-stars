import { MessageCircle, Star, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Artist } from '@/data/artists';

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

const ArtistCard = ({ artist, index }: ArtistCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in booking ${artist.name} for my event. Could you please share more details about availability and pricing?`
    );
    window.open(`https://wa.me/${artist.whatsappNumber.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div 
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {/* Artist Image */}
        <img 
          src={artist.image} 
          alt={`${artist.name} - Pakistani ${artist.category}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Featured Badge */}
        {artist.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/90 backdrop-blur-sm">
            <Star className="w-3 h-3 text-secondary-foreground fill-current" />
            <span className="text-xs font-semibold text-secondary-foreground">Featured</span>
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm border border-border">
          <span className="text-xs font-medium text-foreground">{artist.priceRange}</span>
        </div>

        {/* Quick Book Button - Appears on hover */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <Button 
            variant="whatsapp" 
            className="w-full"
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-3 h-3 text-primary" />
          <span className="text-xs uppercase tracking-wider text-primary font-medium">
            {artist.category === 'qawwali' ? 'Qawwali & Sufi' : artist.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-xl font-bold text-foreground mb-1 group-hover:text-secondary transition-colors duration-300">
          {artist.name}
        </h3>

        {/* Genre */}
        <p className="text-sm text-muted-foreground mb-3">{artist.genre}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {artist.description}
        </p>

        {/* Book Button - Mobile/Default */}
        <Button 
          variant="gold" 
          className="w-full md:hidden"
          onClick={handleWhatsAppClick}
        >
          <MessageCircle className="w-4 h-4" />
          Inquire Now
        </Button>
      </div>
    </div>
  );
};

export default ArtistCard;
