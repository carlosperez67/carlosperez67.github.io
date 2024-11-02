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
                        <span className="font-semibold">🔹 Pursuing Impact through Technology</span>
                        <br />
                        I’m currently completing my Bachelor’s degree in Computer Science at the University of British Columbia, driven by a passion for using technology to tackle real-world challenges and make a lasting impact. My goal? To blend innovation with purpose and push the boundaries of what’s possible in software development.
                    </p>

                    <p>
                        <span className="font-semibold">🔹 Adventurer at Heart</span>
                        <br />
                        When I’m not coding, you’ll find me out in the wild! As an avid skier, rock climber, and hiker, I’m constantly on the hunt for new peaks to conquer and trails to explore. The resilience and problem-solving mindset I bring to my outdoor adventures also fuel my approach to technology—whether it’s scaling a mountain or tackling a challenging project, I’m all in.
                    </p>

                    <p>
                        <span className="font-semibold">🔹 Always Learning, Always Adapting</span>
                        <br />
                        In the ever-evolving field of software development, I believe adaptability and a thirst for learning are essential. I’m enthusiastic about collaborating with others, sharing ideas, and diving into new challenges that push me out of my comfort zone.
                    </p>

                    <p>
                        <span className="font-semibold">Let’s Connect!</span>
                        <br />
                        I’m open to opportunities, networking, and discussions on all things tech. Whether you’re working on an exciting project or just looking to connect, feel free to reach out—I’m eager to chat!
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;