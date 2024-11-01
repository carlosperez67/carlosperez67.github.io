// src/components/About.js

import React from 'react';

const About = () => {
    return (
        <section
            id="about"
            className="py-20 flex flex-col items-center"
            style={{
                backgroundColor: 'rgba(26, 26, 46, 0.6)', // Semi-transparent background for readability
                padding: '2rem',
                borderRadius: '10px',
            }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold mb-10 text-white text-center">About Me</h2>
                <div className="text-lg text-gray-200 max-w-3xl text-center mx-auto space-y-6">
                    <p>
                        Hello! I’m Carlos Perez, a 4th-year Computer Science student at UBC with a deep interest in bioinformatics, software engineering,
                        and the intersection of technology and medicine. I'm passionate about leveraging computational tools to address
                        complex biological problems and making impactful contributions to healthcare technology.
                    </p>
                    <p>
                        Over the past few years, I have gained experience in bioinformatics research, software development,
                        and data analysis through internships and academic projects. My goal is to continue advancing my skills
                        in these areas while collaborating with interdisciplinary teams to drive innovation in biotechnology and healthcare.
                    </p>
                    <p>
                        Beyond coding, I enjoy reading about the latest advancements in biotechnology, exploring the outdoors,
                        and connecting with professionals who share my enthusiasm for technology-driven solutions in medicine.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;