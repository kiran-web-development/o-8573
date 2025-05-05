
import React, { useState, useEffect } from 'react';
import { useMobile } from '../hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

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
        <a href="/" className="text-lg md:text-xl font-bold text-primary">
          SRI SAI KUMAR FANCY SHOP
        </a>

        {/* Nav Links - Desktop */}
        {!isMobile && (
          <nav className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              Products
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-neutral-700 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
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
        <div className="fixed inset-0 top-16 bg-white z-40 p-4">
          <nav className="flex flex-col gap-6 text-center py-8">
            <a
              href="#about"
              className="text-xl font-medium text-neutral-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#products"
              className="text-xl font-medium text-neutral-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Products
            </a>
            <a
              href="#gallery"
              className="text-xl font-medium text-neutral-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-xl font-medium text-neutral-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
