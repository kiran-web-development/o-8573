import React from 'react';
import FadeIn from './animations/FadeIn';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/Image-uploads/47f9a1d0-4458-400a-8fc0-79adf093cf18.png",
      alt: "Gallery Image 1"
    },
    {
      src: "/Image-uploads/dabbf929-5dd0-4794-a011-fe43bf4b3418.png",
      alt: "Gallery Image 2"
    },
    {
      src: "/Image-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png",
      alt: "Gallery Image 3"
    },
    {
      src: "/Image-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png",
      alt: "Gallery Image 4"
    },
    {
      src: "/Image-uploads/02e17fdd-0a86-4b2b-a67c-f203fa70402e.png",
      alt: "Gallery Image 5"
    },
    {
      src: "/Image-uploads/c6799f2d-7865-4ab5-bbb8-d6c4100c6110.png",
      alt: "Gallery Image 6"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
          <p className="text-lg text-neutral-600">Take a look at our beautiful collection</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
