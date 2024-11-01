// src/components/Resume.js

import React from 'react';

const Resume = () => {
    return (
        <section id="resume" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6">Resume</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <a
                        href="public/CarlosPerezResume.pdf"
                        download
                        className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
                    >
                        Download Resume
                    </a>
                    {/* Alternatively, embed the resume */}
                    {/* <embed src="/path-to-your-resume.pdf" width="100%" height="600px" /> */}
                </div>
            </div>
        </section>
    );
};

export default Resume;