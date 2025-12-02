import { Music2, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking an artist for my event. Could you help me find the right performer?"
    );
    window.open(`https://wa.me/923001234567?text=${message}`, '_blank');
  };

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your <span className="text-gradient-gold">Dream Artist?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch with us today and let us help you create an unforgettable event experience.
          </p>
          <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
            <MessageCircle className="w-5 h-5" />
            Chat With Us on WhatsApp
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-2 mb-4">
                {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-gold-glow flex items-center justify-center">
                  <Music2 className="w-5 h-5 text-secondary-foreground" />
                </div> */}
                <img src='/hiresinger_logo.png' className="w-10 h-10 rounded-lg text-secondary-foreground" />
                <span className="font-serif text-2xl font-bold">
                  Hire<span className="text-gradient-gold">Singer</span>
                </span>
              </a>
              <p className="text-muted-foreground max-w-sm mb-6">
                Pakistan's premier platform for booking top musicians and performers for weddings, corporate events, and private celebrations.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/923001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#artists" className="text-muted-foreground hover:text-secondary transition-colors">
                    Browse Artists
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-secondary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-secondary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span>+92 321 4949155</span>
                </li>
                {/* <li className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>info@hiresinger.pk</span>
                </li> */}
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-secondary mt-1" />
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} HireSinger.pk. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
