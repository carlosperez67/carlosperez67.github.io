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
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                            {project.image && (
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            )}
                            <div className="p-4">
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <p className="mb-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
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