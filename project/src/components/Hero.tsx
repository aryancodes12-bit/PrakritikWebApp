import React from 'react';
import { ArrowRight, Heart, Leaf, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
                Pure. Personal. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  Purposeful.
                </span>
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Experience the honest dairy tradition of India, where every drop tells a story of purity, care, and connection to our land.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-stone-700 font-medium">100% Pure A2</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <span className="text-stone-700 font-medium">Farm Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="text-stone-700 font-medium">Made with Love</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full font-medium hover:border-amber-500 hover:text-amber-600 transition-all duration-200">
                Meet Our Cows
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <div className="text-6xl">🥛</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-stone-800">Fresh Daily</h3>
                    <p className="text-stone-600">From our family farm to your doorstep every morning</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-600">Today's Delivery</span>
                      <span className="text-green-600 font-medium">6:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;