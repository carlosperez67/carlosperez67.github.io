// src/components/Projects.js
import React from 'react';

const projects = [
    {
        title: 'Bioinformatics Tool',
        description: 'A tool for analyzing genomic data to identify genetic markers.',
        image: '/images/project1.png',
        github: 'https://github.com/yourusername/bioinformatics-tool',
        live: 'https://yourusername.github.io/bioinformatics-tool',
    },
    {
        title: 'Healthcare App',
        description: 'A mobile application that connects patients with healthcare providers.',
        image: '/images/project2.png',
        github: 'https://github.com/yourusername/healthcare-app',
        live: 'https://yourusername.github.io/healthcare-app',
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-20 flex flex-col items-center"
            style={{
                backgroundColor: 'rgba(26, 26, 46, 0.6)', // Semi-transparent background for better readability
                padding: '2rem',
                borderRadius: '10px',
            }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-semibold mb-10 text-white text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-90 transition-transform transform hover:scale-105"
                        >
                            {project.image && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline font-semibold"
                                    >
                                        GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline font-semibold"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;