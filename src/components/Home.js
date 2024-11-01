// src/components/Home.js

import React from 'react';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-xl text-center max-w-2xl">
                I'm a 4th-year Computer Science student at UBC with a passion for bioinformatics, software engineering, and the intersection of technology and medicine.
            </p>
        </section>
    );
};

export default Home;