import React, { useState } from 'react';
import { QrCode, MapPin, Calendar, Award } from 'lucide-react';

const KnowYourCow = () => {
  const [selectedCow, setSelectedCow] = useState(0);

  const cows = [
    {
      name: "Gaumata Laxmi",
      breed: "Gir Cow",
      age: "4 years",
      location: "Kheda Farm, Gujarat",
      milkYield: "12-15 L/day",
      feed: "Organic grass, jaggery, cotton seed",
      health: "Excellent",
      image: "🐄",
      story: "Laxmi is a gentle Gir cow who loves morning walks in the pasture. She's known for her rich, creamy milk and calm temperament."
    },
    {
      name: "Sundari",
      breed: "Sahiwal",
      age: "5 years",
      location: "Rajasthan Farm",
      milkYield: "10-12 L/day",
      feed: "Natural fodder, mineral supplements",
      health: "Perfect",
      image: "🐄",
      story: "Sundari is our pride - a pure Sahiwal breed known for producing the finest A2 milk. She enjoys her daily oil massage and music therapy."
    },
    {
      name: "Kamdhenu",
      breed: "Red Sindhi",
      age: "3 years",
      location: "Punjab Farm",
      milkYield: "14-16 L/day",
      feed: "Green fodder, soybeans, gur",
      health: "Excellent",
      image: "🐄",
      story: "Our youngest producer, Kamdhenu is energetic and produces exceptionally nutritious milk. She loves playing with farm children."
    }
  ];

  return (
    <section id="know-cow" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <QrCode className="h-12 w-12 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Know Your Cow
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Every bottle comes with a QR code that tells you exactly which cow your milk came from, creating a personal connection with your dairy source
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cow Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">Meet Our Cows</h3>
            {cows.map((cow, index) => (
              <div
                key={index}
                onClick={() => setSelectedCow(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-105 ${
                  selectedCow === index 
                    ? 'bg-white shadow-lg border-2 border-amber-500' 
                    : 'bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{cow.image}</div>
                  <div>
                    <h4 className="font-bold text-stone-800">{cow.name}</h4>
                    <p className="text-stone-600 text-sm">{cow.breed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cow Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{cows[selectedCow].image}</div>
                <h3 className="text-3xl font-bold text-stone-800 mb-2">{cows[selectedCow].name}</h3>
                <p className="text-xl text-amber-600 font-medium">{cows[selectedCow].breed}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-stone-500" />
                    <div>
                      <span className="text-stone-600 text-sm">Age</span>
                      <p className="font-medium text-stone-800">{cows[selectedCow].age}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-stone-500" />
                    <div>
                      <span className="text-stone-600 text-sm">Location</span>
                      <p className="font-medium text-stone-800">{cows[selectedCow].location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-stone-500" />
                    <div>
                      <span className="text-stone-600 text-sm">Health Status</span>
                      <p className="font-medium text-green-600">{cows[selectedCow].health}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-stone-600 text-sm">Daily Milk Yield</span>
                    <p className="font-medium text-stone-800">{cows[selectedCow].milkYield}</p>
                  </div>
                  <div>
                    <span className="text-stone-600 text-sm">Feed</span>
                    <p className="font-medium text-stone-800">{cows[selectedCow].feed}</p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-6">
                <h4 className="font-bold text-stone-800 mb-2">Her Story</h4>
                <p className="text-stone-600 leading-relaxed">{cows[selectedCow].story}</p>
              </div>

              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                  Track This Cow's Milk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowYourCow;