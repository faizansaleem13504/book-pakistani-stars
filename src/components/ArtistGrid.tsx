import { useState } from 'react';
import { artists, categories, Artist } from '@/data/artists';
import ArtistCard from './ArtistCard';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const ArtistGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArtists = artists.filter(artist => {
    const matchesCategory = activeCategory === 'all' || artist.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="artists" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-widest text-secondary font-medium mb-4 block">
            Our Roster
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Meet Our <span className="text-gradient-gold">Artists</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From soulful Sufi singers to energetic rock bands, discover the perfect artist to make your event unforgettable.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, genre, or style..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-card border-border text-base rounded-full focus:border-secondary focus:ring-secondary"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20"
                  : "bg-card border border-border text-muted-foreground hover:border-secondary/50 hover:text-foreground"
              )}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtists.map((artist, index) => (
            <ArtistCard key={artist.id} artist={artist} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No artists found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtistGrid;
