import './App.css';
import Features from './components/Features';

import Hero from './components/Hero';
import Highlight from './components/Highlight';
import HowItWorks from './components/HowItWorks';
import Model from './components/Model';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks />
    </>
  );
};

export default App;
