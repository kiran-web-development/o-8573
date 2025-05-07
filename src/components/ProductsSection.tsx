import React from 'react';
import FadeIn from './animations/FadeIn';

const ProductsSection = () => {
  const products = [
    {
      title: "Fancy Toys",
      description: "Unique and entertaining toys for all ages",
      image: "/Image-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png"
    },
    {
      title: "Special Gifts",
      description: "Perfect presents for every occasion",
      image: "/Image-uploads/af28398b-9e23-4e2b-9de1-bda457e09fd8.png"
    },
    {
      title: "Premium Watches",
      description: "Elegant timepieces for every style",
      image: "/Image-uploads/c6799f2d-7865-4ab5-bbb8-d6c4100c6110.png"
    },
    {
      title: "Beautiful Jewelry",
      description: "Stunning accessories and ornaments",
      image: "/Image-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-neutral-600">Discover our amazing collection</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <FadeIn key={product.title} delay={index * 0.1}>
              <div className="bg-neutral-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-neutral-600">{product.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
