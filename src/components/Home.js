// src/components/Home.js

import React from 'react';

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center"
            style={{
                backgroundColor: 'rgba(26, 26, 46, 0.6)', // Semi-transparent background for readability
                padding: '2rem', // Additional padding for spacing
                borderRadius: '10px', // Rounded corners for a soft look
            }}
        >
            <h1 className="text-5xl font-bold text-white mb-4">Welcome!</h1>
            <p className="text-2xl text-center max-w-2xl text-gray-200">
                I’m a 4th-year Computer Science student at UBC, driven by a fascination with how technology can transform lives and redefine what’s possible. Always eager to learn, adapt, and take on new challenges, I’m passionate about creating software that leaves a lasting impact.
            </p>
        </section>
    );
};

export default Home;