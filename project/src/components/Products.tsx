import React from 'react';
import { Star, Award, Droplets } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "A2 Desi Cow Milk",
      description: "Pure A2 protein from indigenous Indian cow breeds, naturally rich and creamy",
      price: "₹80/L",
      rating: 4.9,
      features: ["100% A2 Protein", "Grass Fed", "Chemical Free"],
      image: "🐄"
    },
    {
      name: "Buffalo Milk",
      description: "Rich, thick buffalo milk perfect for traditional Indian sweets and chai",
      price: "₹90/L",
      rating: 4.8,
      features: ["High Fat Content", "Rich Taste", "Perfect for Sweets"],
      image: "🐃"
    },
    {
      name: "Mixed Milk",
      description: "Carefully blended cow and buffalo milk for balanced taste and nutrition",
      price: "₹75/L",
      rating: 4.7,
      features: ["Balanced Nutrition", "Great for Daily Use", "Family Favorite"],
      image: "🥛"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Pure Products
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Every bottle carries the promise of purity, tradition, and the love of our farming community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{product.image}</div>
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{product.name}</h3>
                <p className="text-stone-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-amber-600">{product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-stone-700 font-medium">{product.rating}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-green-600" />
                      <span className="text-stone-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105">
                  Add to Subscription
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="text-center">
            <Droplets className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Our Quality Promise</h3>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Every drop is tested for purity, freshness, and nutritional value. We maintain the cold chain from farm to your doorstep, ensuring you get the freshest milk every single day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;