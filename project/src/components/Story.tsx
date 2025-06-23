import React from 'react';
import { Users, Heart, Leaf, Home } from 'lucide-react';

const Story = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Made with Love",
      description: "Every step of our process is infused with care, from the way we treat our cows to how we deliver to your door."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Naturally Pure",
      description: "We believe in nature's wisdom. Our cows graze freely, eat organic feed, and live stress-free lives."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Community First",
      description: "We support local farmers and their families, creating sustainable livelihoods while preserving traditions."
    },
    {
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Like Family",
      description: "When you choose Prakritik, you become part of our extended family. Your trust drives our commitment."
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Born from a simple belief that milk should be pure, personal, and purposeful. We started Prakritik to bring back the honest dairy experience that our grandparents knew and trusted.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-stone-800">
              A Return to Authenticity
            </h3>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                In the bustling cities of modern India, we often lose touch with where our food comes from. Prakritik was born from a desire to bridge this gap—to create a personal connection between urban families and the rural farming communities that nourish us.
              </p>
              <p>
                Our founders, Rajesh and Priya, grew up in farming families where milk wasn't just a commodity—it was a relationship. They remembered the taste of fresh milk, still warm from gentle cows who were treated like family members.
              </p>
              <p>
                Today, we work with over 200 farming families across Gujarat, Rajasthan, and Punjab, ensuring that traditional wisdom meets modern quality standards. Every cow in our network has a name, a story, and a dedicated caretaker who knows her preferences.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-center space-y-6">
              <div className="text-8xl">🌾</div>
              <h4 className="text-2xl font-bold text-stone-800">From Farm to Family</h4>
              <p className="text-stone-600">
                Every morning at 4 AM, our farmers begin their day with love and dedication, ensuring you get the freshest milk possible.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-amber-600">200+</div>
                    <div className="text-stone-600 text-sm">Farm Families</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">5000+</div>
                    <div className="text-stone-600 text-sm">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-600">3</div>
                    <div className="text-stone-600 text-sm">States</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-3">{value.title}</h4>
                <p className="text-stone-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Family</h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the difference that pure, personal, and purposeful dairy can make in your life.
            </p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold hover:bg-stone-50 transition-colors duration-200 transform hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;