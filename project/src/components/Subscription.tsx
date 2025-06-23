import React, { useState } from 'react';
import { Calendar, Clock, Truck, CreditCard } from 'lucide-react';

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [selectedMilk, setSelectedMilk] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const subscriptionPlans = [
    { name: "Daily", discount: "0%", price: "Full Price" },
    { name: "Weekly", discount: "5%", price: "Save ₹20/week" },
    { name: "Monthly", discount: "10%", price: "Save ₹120/month" }
  ];

  const milkTypes = [
    { name: "A2 Desi Cow", price: 80, unit: "L" },
    { name: "Buffalo Milk", price: 90, unit: "L" },
    { name: "Mixed Milk", price: 75, unit: "L" }
  ];

  const calculatePrice = () => {
    const basePrice = milkTypes[selectedMilk].price * quantity;
    const discount = selectedPlan === 1 ? 0.05 : selectedPlan === 2 ? 0.10 : 0;
    return Math.round(basePrice * (1 - discount));
  };

  return (
    <section id="subscription" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Start Your Daily Delivery
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Choose your perfect milk subscription and enjoy fresh, pure dairy delivered to your doorstep every morning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-3xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Configuration */}
              <div className="space-y-8">
                {/* Milk Type Selection */}
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Choose Your Milk</h3>
                  <div className="space-y-3">
                    {milkTypes.map((milk, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedMilk(index)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedMilk === index
                            ? 'bg-white shadow-lg border-2 border-amber-500'
                            : 'bg-white/70 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-stone-800">{milk.name}</span>
                          <span className="text-amber-600 font-bold">₹{milk.price}/{milk.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Daily Quantity</h3>
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-stone-200 hover:bg-stone-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      -
                    </button>
                    <span className="text-2xl font-bold text-stone-800 min-w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-stone-200 hover:bg-stone-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      +
                    </button>
                    <span className="text-stone-600 ml-4">Liters per day</span>
                  </div>
                </div>

                {/* Subscription Plan */}
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-4">Subscription Plan</h3>
                  <div className="space-y-3">
                    {subscriptionPlans.map((plan, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedPlan(index)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedPlan === index
                            ? 'bg-white shadow-lg border-2 border-amber-500'
                            : 'bg-white/70 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium text-stone-800">{plan.name}</span>
                            {plan.discount !== "0%" && (
                              <span className="ml-2 text-green-600 text-sm font-medium">
                                {plan.discount} off
                              </span>
                            )}
                          </div>
                          <span className="text-stone-600 text-sm">{plan.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Summary & Checkout */}
              <div className="bg-white rounded-2xl p-6 shadow-lg h-fit">
                <h3 className="text-xl font-bold text-stone-800 mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-stone-600">Milk Type</span>
                    <span className="font-medium text-stone-800">{milkTypes[selectedMilk].name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Quantity</span>
                    <span className="font-medium text-stone-800">{quantity}L daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-600">Plan</span>
                    <span className="font-medium text-stone-800">{subscriptionPlans[selectedPlan].name}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-stone-800">Total per day</span>
                      <span className="text-2xl font-bold text-amber-600">₹{calculatePrice()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-stone-600">
                    <Clock className="h-5 w-5" />
                    <span>Delivery: 6:00 AM daily</span>
                  </div>
                  <div className="flex items-center space-x-3 text-stone-600">
                    <Truck className="h-5 w-5" />
                    <span>Free delivery in your area</span>
                  </div>
                  <div className="flex items-center space-x-3 text-stone-600">
                    <CreditCard className="h-5 w-5" />
                    <span>Pay monthly, cancel anytime</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 mb-4">
                  Start Subscription
                </button>
                
                <p className="text-center text-stone-500 text-sm">
                  No commitment. Cancel or modify anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;