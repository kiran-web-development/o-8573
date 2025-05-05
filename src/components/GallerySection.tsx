
import React from 'react';
import FadeIn from './animations/FadeIn';

const GallerySection = () => {
  const galleryItems = [
    { id: 1, category: "toys", title: "Fancy Toys Collection" },
    { id: 2, category: "gifts", title: "Gift Items" },
    { id: 3, category: "watches", title: "Premium Watches" },
    { id: 4, category: "jewellery", title: "Jewelry Collection" },
    { id: 5, category: "decoration", title: "Festive Decorations" },
    { id: 6, category: "clothes", title: "Traditional Clothing" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Product Gallery</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.id} delay={0.1 * index}>
              <div className="group relative aspect-square bg-neutral-200 rounded-lg overflow-hidden cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-medium text-neutral-600">{item.category}</span>
                </div>
                
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
