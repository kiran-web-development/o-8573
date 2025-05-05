
import React from 'react';
import { Gift, Watch, Image as ImageIcon, ShoppingBag } from 'lucide-react';
import FadeIn from './animations/FadeIn';

type ProductCategory = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const productCategories: ProductCategory[] = [
  {
    id: "toys",
    title: "Fancy Toys",
    description: "Delightful toys for children of all ages to inspire imagination and fun.",
    icon: <ShoppingBag className="h-10 w-10 text-primary" />
  },
  {
    id: "gifts",
    title: "Special Gifts",
    description: "Thoughtful and unique gift items for every occasion and celebration.",
    icon: <Gift className="h-10 w-10 text-primary" />
  },
  {
    id: "watches",
    title: "Premium Watches",
    description: "Stylish timepieces for men and women that combine elegance with functionality.",
    icon: <Watch className="h-10 w-10 text-primary" />
  },
  {
    id: "jewellery",
    title: "Beautiful Jewelry",
    description: "Exquisite jewelry pieces to add sparkle to your special occasions.",
    icon: <ImageIcon className="h-10 w-10 text-primary" />
  }
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category) => (
            <FadeIn key={category.id} delay={0.1}>
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                <div className="mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{category.title}</h3>
                <p className="text-neutral-600 text-center">{category.description}</p>
                <div className="mt-auto pt-4 text-center">
                  <a href={`#${category.id}`} className="text-primary hover:underline font-medium">
                    Explore {category.title} →
                  </a>
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
