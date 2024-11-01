// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeBackground from './components/ThreeBackground';

function App() {
    return (
        <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* ThreeBackground is positioned fixed and behind all content */}
            <ThreeBackground />

            {/* Main content overlay */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <div className="pt-16"> {/* Offset for fixed navbar */}
                    <Home />
                    <About />
                    <Resume />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default App;