
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Menu, X, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // Close mobile menu when clicking on a nav link
  const handleNavLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "#about", label: "ABOUT" },
    { href: "#products", label: "PRODUCTS" },
    { href: "#gallery", label: "GALLERY" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-lg md:text-xl font-bold text-neutral-800">
          SRI SAI KUMAR<span className="text-red-500">.</span>
        </a>

        {/* Nav Links - Desktop */}
        {!isMobile && (
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
              <a href="mailto:contact@srisaikumar.com" className="text-neutral-600 hover:text-primary transition-colors">
                <Mail size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-700" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-700" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 p-4 animate-fade-in">
          <nav className="flex flex-col gap-6 text-center py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xl font-medium text-neutral-700 hover:text-primary transition-colors py-2"
                onClick={handleNavLinkClick}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Social Links - Mobile */}
          <div className="flex justify-center items-center gap-6 mt-8 border-t border-gray-100 pt-6">
            <a href="mailto:contact@srisaikumar.com" className="text-neutral-600 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
