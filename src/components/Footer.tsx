
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Mail, Phone, Facebook, Instagram, Twitter, MapPin, LinkedIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setEmail('');
    setMessage('');
  };

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className={cn('py-20 bg-neutral-100 border-t border-gray-200', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact Information */}
          <FadeIn>
            <h3 className="text-xl font-bold mb-6">SRI SAI KUMAR<span className="text-red-500">.</span></h3>
            <p className="text-neutral-600 mb-6">
              Your one-stop destination for all things fancy - bringing joy, elegance, and creativity to your life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-neutral-500" />
                <span className="text-sm text-neutral-600">Cross Road, S R Puram-517167, Chittoor District, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-neutral-500" />
                <span className="text-sm text-neutral-600">9989394522, 9949922107</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-neutral-500" />
                <a href="mailto:contact@srisaikumar.com" className="text-sm text-neutral-600 hover:text-primary">contact@srisaikumar.com</a>
              </div>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1}>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => scrollToSection('home')} className="text-sm text-neutral-600 hover:text-primary text-left">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-sm text-neutral-600 hover:text-primary text-left">About Us</button>
              <button onClick={() => scrollToSection('products')} className="text-sm text-neutral-600 hover:text-primary text-left">Products</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm text-neutral-600 hover:text-primary text-left">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-neutral-600 hover:text-primary text-left">Contact</button>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-200 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-200 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-200 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-200 rounded-full text-neutral-600 hover:bg-primary hover:text-white transition-colors">
                  <LinkedIn size={16} />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-neutral-800 text-white font-medium rounded-md hover:bg-neutral-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sri Sai Kumar Fancy Shop. All rights reserved.
          </div>
          
          <div className="text-sm text-neutral-500">
            Designed with ❤️ for our customers
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
