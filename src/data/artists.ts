import rahatImg from '@/assets/artists/rahat.jpg';
import atifImg from '@/assets/artists/atif.jpg';
import aliZafarImg from '@/assets/artists/alizafar.jpg';
import abidaImg from '@/assets/artists/abida.jpg';
import arijitImg from '@/assets/artists/arijit.jpg';
import farhanImg from '@/assets/artists/farhan_saeed.jpg';
import mominaImg from '@/assets/artists/momina.jpg';
import asimImg from '@/assets/artists/asimazhar.jpg';
import sajjadImg from '@/assets/artists/sajjad.jpg';
import stringsImg from '@/assets/artists/strings.jpg';
import junoonImg from '@/assets/artists/junoon.jpg';
import nooriImg from '@/assets/artists/noori.jpg';
const whatsappNumber = '+923214949155';
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

export const artists: Artist[] = [
  {
    id: '1',
    name: 'Rahat Fateh Ali Khan',
    genre: 'Sufi, Qawwali, Playback',
    category: 'qawwali',
    description: 'Legendary Qawwali maestro and playback singer, nephew of the great Nusrat Fateh Ali Khan. Known for soulful performances that transcend boundaries.',
    image: rahatImg,
    whatsappNumber: whatsappNumber,
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '2',
    name: 'Atif Aslam',
    genre: 'Pop, Rock, Playback',
    category: 'singer',
    description: 'Pakistan\'s heartthrob and one of the most celebrated singers in South Asia. Known for chart-topping hits and electrifying live performances.',
    image: atifImg,
    whatsappNumber: whatsappNumber,
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '3',
    name: 'Ali Zafar',
    genre: 'Pop, Rock, Playback',
    category: 'singer',
    description: 'Multi-talented artist, singer, songwriter, and actor. His energetic performances and catchy tunes make every event unforgettable.',
    image: aliZafarImg,
    whatsappNumber: whatsappNumber,
    featured: true,
    priceRange: 'Premium'
  },
  // {
  //   id: '4',
  //   name: 'Strings',
  //   genre: 'Pop Rock, Soft Rock',
  //   category: 'band',
  //   description: 'Iconic Pakistani pop-rock band that shaped the music industry. Timeless melodies and powerful performances.',
  //   image: stringsImg,
  //   whatsappNumber: whatsappNumber,
  //   featured: false,
  //   priceRange: 'Premium'
  // },
  {
    id: '6',
    name: 'Abida Parveen',
    genre: 'Sufi, Classical',
    category: 'qawwali',
    description: 'Queen of Sufi music. Her powerful voice and spiritual presence create an atmosphere of divine connection.',
    image: abidaImg,
    whatsappNumber: whatsappNumber,
    featured: true,
    priceRange: 'Premium'
  },
  {
    id: '7',
    name: 'Junoon',
    genre: 'Sufi Rock',
    category: 'band',
    description: 'Pioneers of Sufi rock. Their fusion of traditional Sufi poetry with rock music revolutionized Pakistani music.',
    image: junoonImg,
    whatsappNumber: whatsappNumber,
    featured: false,
    priceRange: 'Premium'
  },
  {
    id: '8',
    name: 'Farhan Saeed',
    genre: 'Pop, Rock',
    category: 'singer',
    description: 'Former Jal band vocalist turned solo artist. Known for romantic hits and charismatic stage presence.',
    image: farhanImg,
    whatsappNumber: whatsappNumber,
    featured: false,
    priceRange: 'Standard'
  },
  // {
  //   id: '9',
  //   name: 'Momina Mustehsan',
  //   genre: 'Pop, Coke Studio',
  //   category: 'singer',
  //   description: 'Rising star known for her melodious voice. Her Coke Studio performance made her an overnight sensation.',
  //   image: mominaImg,
  //   whatsappNumber: whatsappNumber,
  //   featured: false,
  //   priceRange: 'Standard'
  // },
  {
    id: '10',
    name: 'Asim Azhar',
    genre: 'Pop, Playback',
    category: 'singer',
    description: 'Young sensation with a powerful voice. Perfect for concerts, weddings, and corporate events.',
    image: asimImg,
    whatsappNumber: whatsappNumber,
    featured: false,
    priceRange: 'Standard'
  },
  // {
  //   id: '11',
  //   name: 'Noori',
  //   genre: 'Alternative Rock',
  //   category: 'band',
  //   description: 'Alternative rock legends. Their music speaks to the youth and creates an electric atmosphere.',
  //   image: nooriImg,
  //   whatsappNumber: whatsappNumber,
  //   featured: false,
  //   priceRange: 'Premium'
  // },
  {
    id: '12',
    name: 'Sajjad Ali',
    genre: 'Pop, Classical Fusion',
    category: 'singer',
    description: 'Versatile artist known for blending classical elements with modern pop. A true maestro of Pakistani music.',
    image: sajjadImg,
    whatsappNumber: whatsappNumber,
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
