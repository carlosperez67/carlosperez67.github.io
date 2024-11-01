// src/App.js
import React from 'react';
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import ThreeBackground from "./ThreeBackground";


function About() {
    return null;
}

function App() {
    return (
        <div className="App" style={{ position: 'relative' }}>
            <ThreeBackground />
            <div style={{ position: 'relative', zIndex: 1 }}>
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