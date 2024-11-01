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
            <h1 className="text-5xl font-bold text-white mb-4">Welcome!</h1> {/* Increased font size for emphasis */}
            <p className="text-2xl text-center max-w-2xl text-gray-200">
                This website is still a work in progress!
                {/*I'm a 4th-year Computer Science student at UBC with a passion for bioinformatics, software engineering,*/}
                {/*and the intersection of technology and medicine.*/}
            </p>
        </section>
    );
};

export default Home;