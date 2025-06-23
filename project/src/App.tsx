import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import KnowYourCow from './components/KnowYourCow';
import Subscription from './components/Subscription';
import Story from './components/Story';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <Products />
      <KnowYourCow />
      <Subscription />
      <Story />
      <Footer />
    </div>
  );
}

export default App;