import { Search, MessageCircle, Calendar, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse Artists',
    description: 'Explore our curated roster of Pakistan\'s finest musicians and performers.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: MessageCircle,
    title: 'Connect via WhatsApp',
    description: 'Reach out directly to discuss your event details and requirements.',
    color: 'text-[#25D366]',
    bgColor: 'bg-[#25D366]/10',
  },
  {
    icon: Calendar,
    title: 'Confirm Booking',
    description: 'Finalize the date, venue, and terms for your memorable event.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Sparkles,
    title: 'Enjoy the Show',
    description: 'Sit back and watch your event come alive with incredible performances.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-secondary font-medium mb-4 block">
            Simple Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Booking your favorite artist has never been easier. Follow these simple steps to make your event unforgettable.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}

              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 group">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
