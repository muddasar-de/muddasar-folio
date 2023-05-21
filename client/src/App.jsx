import React from 'react';
import './App.scss';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Work,
} from './containers';
import { Navbar } from './components';

const App = () => {
  console.log("LET'S DO IT...");
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
