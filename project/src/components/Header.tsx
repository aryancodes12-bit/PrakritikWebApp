import React, { useState } from 'react';
import { Menu, X, Milk } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-full">
              <Milk className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-stone-800">प्राकृतिक</span>
            <span className="text-sm text-stone-600 hidden sm:block">PRAKRITIK</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Products</a>
            <a href="#know-cow" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Know Your Cow</a>
            <a href="#subscription" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Subscribe</a>
            <a href="#story" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Our Story</a>
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
              Start Delivery
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-4">
              <a href="#products" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Products</a>
              <a href="#know-cow" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Know Your Cow</a>
              <a href="#subscription" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Subscribe</a>
              <a href="#story" className="text-stone-700 hover:text-amber-600 transition-colors duration-200">Our Story</a>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full w-fit">
                Start Delivery
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;