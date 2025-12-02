import artistSufiMale from '@/assets/artist-sufi-male.jpg';
import artistPopMale from '@/assets/artist-pop-male.jpg';
import artistFemale from '@/assets/artist-female.jpg';
import artistBand from '@/assets/artist-band.jpg';

export interface Artist {
  id: string;
  name: string;
  genre: string;
  category: 'singer' | 'band' | 'qawwali';
  description: string;
  image: string;
  whatsappNumber: string;
  featured?: boolean;
  priceRange: string;
}

// Map images by category and index for variety
const getArtistImage = (category: string, index: number): string => {
  if (category === 'band') return artistBand;
  if (category === 'qawwali') return artistSufiMale;
  // Alternate between male and female for singers
  const femaleIndices = [5, 8]; // Abida Parveen, Momina Mustehsan
  if (femaleIndices.includes(index)) return artistFemale;
  return artistPopMale;
};

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Rahat Fateh Ali Khan',
    genre: 'Sufi, Qawwali, Playback',
    category: 'qawwali',
    description: 'Legendary Qawwali maestro and playback singer, nephew of the great Nusrat Fateh Ali Khan. Known for soulful performances that transcend boundaries.',
    image: artistSufiMale,
    whatsappNumber: '+923001234567',
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '2',
    name: 'Atif Aslam',
    genre: 'Pop, Rock, Playback',
    category: 'singer',
    description: 'Pakistan\'s heartthrob and one of the most celebrated singers in South Asia. Known for chart-topping hits and electrifying live performances.',
    image: artistPopMale,
    whatsappNumber: '+923001234567',
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '3',
    name: 'Ali Zafar',
    genre: 'Pop, Rock, Playback',
    category: 'singer',
    description: 'Multi-talented artist, singer, songwriter, and actor. His energetic performances and catchy tunes make every event unforgettable.',
    image: artistPopMale,
    whatsappNumber: '+923001234567',
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '4',
    name: 'Strings',
    genre: 'Pop Rock, Soft Rock',
    category: 'band',
    description: 'Iconic Pakistani pop-rock band that shaped the music industry. Timeless melodies and powerful performances.',
    image: artistBand,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Premium'
  },
  {
    id: '5',
    name: 'Arijit Singh',
    genre: 'Playback, Bollywood',
    category: 'singer',
    description: 'The voice of romance in South Asian cinema. His soulful renditions create magical moments at every event.',
    image: artistPopMale,
    whatsappNumber: '+923001234567',
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '6',
    name: 'Abida Parveen',
    genre: 'Sufi, Classical',
    category: 'qawwali',
    description: 'Queen of Sufi music. Her powerful voice and spiritual presence create an atmosphere of divine connection.',
    image: artistFemale,
    whatsappNumber: '+923001234567',
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '7',
    name: 'Junoon',
    genre: 'Sufi Rock',
    category: 'band',
    description: 'Pioneers of Sufi rock. Their fusion of traditional Sufi poetry with rock music revolutionized Pakistani music.',
    image: artistBand,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Premium'
  },
  {
    id: '8',
    name: 'Farhan Saeed',
    genre: 'Pop, Rock',
    category: 'singer',
    description: 'Former Jal band vocalist turned solo artist. Known for romantic hits and charismatic stage presence.',
    image: artistPopMale,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Standard'
  },
  {
    id: '9',
    name: 'Momina Mustehsan',
    genre: 'Pop, Coke Studio',
    category: 'singer',
    description: 'Rising star known for her melodious voice. Her Coke Studio performance made her an overnight sensation.',
    image: artistFemale,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Standard'
  },
  {
    id: '10',
    name: 'Asim Azhar',
    genre: 'Pop, Playback',
    category: 'singer',
    description: 'Young sensation with a powerful voice. Perfect for concerts, weddings, and corporate events.',
    image: artistPopMale,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Standard'
  },
  {
    id: '11',
    name: 'Noori',
    genre: 'Alternative Rock',
    category: 'band',
    description: 'Alternative rock legends. Their music speaks to the youth and creates an electric atmosphere.',
    image: artistBand,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Premium'
  },
  {
    id: '12',
    name: 'Sajjad Ali',
    genre: 'Pop, Classical Fusion',
    category: 'singer',
    description: 'Versatile artist known for blending classical elements with modern pop. A true maestro of Pakistani music.',
    image: artistSufiMale,
    whatsappNumber: '+923001234567',
    featured: false,
    priceRange: 'Premium'
  }
];

export const categories = [
  { id: 'all', label: 'All Artists', icon: '🎤' },
  { id: 'singer', label: 'Singers', icon: '🎵' },
  { id: 'band', label: 'Bands', icon: '🎸' },
  { id: 'qawwali', label: 'Qawwali & Sufi', icon: '🎶' },
];
