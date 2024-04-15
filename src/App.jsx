import './App.css';

import Hero from './components/Hero';
import Highlight from './components/Highlight';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Highlight/>
    </>
  );
};

export default App;
