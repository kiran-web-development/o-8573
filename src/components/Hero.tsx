
import React from 'react';
import FadeIn from './animations/FadeIn';
import Button from './ui-custom/Button';
import Gap from './Gap';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              Welcome to <span className="text-primary block">SRI SAI KUMAR FANCY SHOP</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-700 font-light italic mb-8">
              "Discover joy in every purchase - from elegant gifts and stylish watches to stunning jewelry, playful toys, and fashionable clothes."
            </p>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-10">
              Explore our curated collection of fancy toys, thoughtful gifts, premium watches, beautiful jewelry, and trendy clothes for all occasions.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button href="#products" className="min-w-[180px]">
                Explore Products
              </Button>
              <Button href="#contact" variant="outline" className="min-w-[180px]">
                Contact Us
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Removing the size prop from Gap since it's not supported */}
      <Gap />
    </section>
  );
};

export default Hero;
