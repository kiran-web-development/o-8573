import React from 'react';
import FadeIn from './animations/FadeIn';

const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Shop</h2>
                <p className="text-lg text-neutral-700 mb-4">
                  Welcome to Sri Sai Kumar Fancy Shop, your one-stop destination for all things beautiful and unique in S R Puram.
                </p>
                <p className="text-lg text-neutral-700 mb-4">
                  We take pride in offering a wide variety of high-quality fancy toys, thoughtful gifts, premium watches, exquisite jewelry, and festive decorations to suit all occasions and celebrations.
                </p>
                <p className="text-lg text-neutral-700">
                  Our family-owned business has been serving the community for years with a commitment to quality, affordability, and exceptional customer service.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/Image-uploads/IMG_20250430_070030.jpg"
                  alt="Store Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 -mt-8 mb-16">
        <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
          <FadeIn className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">Quality Products</h3>
              <p className="text-neutral-600">We source only the finest products</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1} className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">Affordable Prices</h3>
              <p className="text-neutral-600">Quality without breaking the bank</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">Wide Selection</h3>
              <p className="text-neutral-600">Everything for every occasion</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3} className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-primary">Customer Service</h3>
              <p className="text-neutral-600">Always ready to assist you</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
