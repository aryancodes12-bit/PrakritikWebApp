import React from 'react';
import { Milk, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-full">
                <Milk className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">प्राकृतिक</span>
                <p className="text-stone-400 text-sm">PRAKRITIK</p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Pure. Personal. Purposeful. Experience the honest dairy tradition of India with every drop.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#products" className="text-stone-400 hover:text-white transition-colors duration-200">Our Products</a></li>
              <li><a href="#know-cow" className="text-stone-400 hover:text-white transition-colors duration-200">Know Your Cow</a></li>
              <li><a href="#subscription" className="text-stone-400 hover:text-white transition-colors duration-200">Subscription</a></li>
              <li><a href="#story" className="text-stone-400 hover:text-white transition-colors duration-200">Our Story</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Quality Promise</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">FAQ</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Delivery Areas</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Payment Options</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Refund Policy</a></li>
              <li><a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Track Order</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-stone-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-stone-400">hello@prakritik.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-1" />
                <span className="text-stone-400">
                  123 Farm Road,<br />
                  Ahmedabad, Gujarat 380001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-stone-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400 text-sm">
              © 2024 Prakritik. All rights reserved. Made with ❤️ in India.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;