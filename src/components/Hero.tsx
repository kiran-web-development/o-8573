import React from 'react';
import FadeIn from './animations/FadeIn';
import Button from './ui-custom/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      {/* Spacer div for header height with smooth transition */}
      <div className="h-24 md:h-[100px] w-full shrink-0 transition-all duration-300" />
      
      {/* Background image */}
      <img 
        src="/public/Image-uploads/c6799f2d-7865-4ab5-bbb8-d6c4100c6110.png"
        alt="Fancy Shop Interior" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay with gradient and glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/30 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-white transition-transform duration-300">
        <FadeIn delay={0} className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 [text-wrap:balance]">
            <span className="block mb-2 hover-text text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 animate-gradient-x">
              Living Made Better
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto glass-panel bg-opacity-5 rounded-lg px-6 py-4">
            "Your one-stop destination for all things fancy - bringing joy, elegance, and creativity to your life"
          </p>
          
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
            Explore our wide collection of fancy toys, thoughtful gifts, premium watches, beautiful jewelry, and festive decorations for all your special occasions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              href="#products" 
              variant="primary" 
              size="lg"
              className="min-w-[180px] bg-white text-neutral-800 hover:bg-neutral-100"
            >
              Explore Products
            </Button>
            <Button 
              href="#contact" 
              variant="outline" 
              size="lg"
              className="min-w-[180px] border-white text-white hover:bg-white/20"
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
