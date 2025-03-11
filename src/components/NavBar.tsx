
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">ianetic</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-ianetic-600 transition-colors">
              Soluciones
            </a>
            <a href="#case-studies" className="text-sm font-medium text-gray-700 hover:text-ianetic-600 transition-colors">
              Aplicaciones
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-ianetic-600 transition-colors">
              Contacto
            </a>
            <a 
              href="#contact" 
              className="flex items-center px-4 py-2 rounded-full bg-ianetic-500 text-white font-medium text-sm hover:bg-ianetic-600 transition-colors shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Solicitar demo</span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fadeIn">
          <nav className="flex flex-col space-y-4 p-6">
            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-ianetic-600"
            >
              Soluciones
            </a>
            <a 
              href="#case-studies" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-ianetic-600"
            >
              Aplicaciones
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-ianetic-600"
            >
              Contacto
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-full bg-ianetic-500 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Solicitar demo</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
