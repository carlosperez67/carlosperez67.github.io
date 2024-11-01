// src/components/WorkExperience.js

import React from 'react';

const experiences = [
    {
        title: 'Software Engineer Intern',
        company: 'Bioinformatics Solutions Inc.',
        duration: 'May 2023 - Aug 2023',
        description: 'Developed tools to analyze genomic data and optimize data processing pipelines, improving efficiency by 25%. Collaborated with a team of bioinformaticians and software developers to deliver high-quality data analysis tools for healthcare clients.',
    },
    {
        title: 'Research Assistant',
        company: 'UBC Department of Computer Science',
        duration: 'Sep 2022 - Apr 2023',
        description: 'Assisted in research focused on the intersection of computer science and medicine. Analyzed large datasets and created data visualizations to support research findings. Contributed to a publication on machine learning applications in medical imaging.',
    },
    {
        title: 'Junior Developer',
        company: 'Tech Innovations Ltd.',
        duration: 'Jan 2022 - Aug 2022',
        description: 'Built and maintained features for a web application used by over 10,000 users. Improved the performance of front-end components and collaborated with a cross-functional team to implement new functionality.',
    },
    // Add more experiences as needed
];

const WorkExperience = () => {
    return (
        <section
            id="experience"
            className="py-20 flex flex-col items-center"
            style={{
                backgroundColor: 'rgba(26, 26, 46, 0.6)', // Semi-transparent background for readability
                padding: '2rem',
                borderRadius: '10px',
            }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold mb-10 text-white text-center">Work Experience</h2>
                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white bg-opacity-90"
                        >
                            <h3 className="text-2xl font-bold text-gray-800">{experience.title}</h3>
                            <p className="text-lg text-gray-700 font-semibold">{experience.company}</p>
                            <p className="text-sm text-gray-500 italic">{experience.duration}</p>
                            <p className="mt-4 text-gray-600">{experience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;