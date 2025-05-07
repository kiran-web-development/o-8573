import React from 'react';
import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';

interface NavigationBarProps {
  isMobile: boolean;
  handleNavLinkClick: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isMobile, handleNavLinkClick }) => {
  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#products", label: "PRODUCTS" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <div className="flex items-center gap-8">
      <nav className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            onClick={handleNavLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>
      
      {/* Social Links */}
      <div className="hidden md:flex items-center gap-4 border-l border-gray-200 pl-6">
        <a 
          href="mailto:contact@srisaikumar.com" 
          className="text-neutral-600 hover:text-primary transition-colors"
          title="Send us an email"
          aria-label="Send us an email"
        >
          <Mail size={18} />
        </a>
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neutral-600 hover:text-primary transition-colors"
          title="Visit our Facebook page"
          aria-label="Visit our Facebook page"
        >
          <Facebook size={18} />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neutral-600 hover:text-primary transition-colors"
          title="Visit our Instagram page"
          aria-label="Visit our Instagram page"
        >
          <Instagram size={18} />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neutral-600 hover:text-primary transition-colors"
          title="Visit our Twitter page"
          aria-label="Visit our Twitter page"
        >
          <Twitter size={18} />
        </a>
      </div>
    </div>
  );
};

export const mobileNavLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#products", label: "PRODUCTS" },
  { href: "#gallery", label: "GALLERY" },
  { href: "#contact", label: "CONTACT" },
];

export default NavigationBar;