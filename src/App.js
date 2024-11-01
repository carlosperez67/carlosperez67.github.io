import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="pt-16"> {/* To offset the fixed navbar height */}
          <Home />
          <About />
          <Resume />
          <Projects />
          <Contact />
        </div>
      </div>
  );
}

export default App;