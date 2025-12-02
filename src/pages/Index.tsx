import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ArtistGrid from '@/components/ArtistGrid';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>HireSinger.pk - Book Pakistan's Top Artists for Your Events</title>
        <meta 
          name="description" 
          content="Book Pakistan's finest musicians including Rahat Fateh Ali Khan, Atif Aslam, and top bands for weddings, corporate events, and private celebrations. Easy booking via WhatsApp." 
        />
        <meta name="keywords" content="book pakistani singers, hire musicians pakistan, wedding singers lahore, corporate event artists, rahat fateh ali khan booking, atif aslam booking" />
        <link rel="canonical" href="https://hiresinger.pk" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <ArtistGrid />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
