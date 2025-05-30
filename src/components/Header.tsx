import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 transition-all duration-300"
    >
      <div className="container flex justify-between items-center relative">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center w-full">
          <ul className="flex space-x-8 justify-center w-full">
            <li>
              <a href="#practice" className="nav-link text-dark hover:text-primary font-semibold tracking-wide">Practice</a>
            </li>
            <li className="flex items-center">
              <span className="text-secondary mx-1">▪</span>
            </li>
            <li>
              <a href="#about" className="nav-link text-dark hover:text-primary font-semibold tracking-wide">About</a>
            </li>
            <li className="flex items-center">
              <span className="text-secondary mx-1">▪</span>
            </li>
            <li>
              <a href="#consultation" className="nav-link text-dark hover:text-primary font-semibold tracking-wide">Consultation</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button (right-aligned) */}
        <button 
          className="md:hidden focus:outline-none absolute right-6 top-1/2 transform -translate-y-1/2 text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Open navigation menu"
        >
          <Menu size={28} className="text-dark" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full z-[100] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden={!isMobileMenuOpen}
        >
          <div
            className={`absolute top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            onClick={e => e.stopPropagation()}
          >
            <nav className="container py-8">
              <ul className="space-y-6">
                <li>
                  <a 
                    href="#practice" 
                    className="block py-2 text-dark hover:text-primary text-xl font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Practice
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="block py-2 text-dark hover:text-primary text-xl font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#consultation" 
                    className="block py-2 text-dark hover:text-primary text-xl font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Consultation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;