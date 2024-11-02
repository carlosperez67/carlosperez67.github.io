// src/components/WorkExperience.js

import React from 'react';

const experiences = [
    {
        title: 'Full-Stack Developer COOP',
        company: 'Government of Canada',
        location: 'Ottawa, ON',
        duration: 'May 2024 - Aug 2024',
        description: [
            'Led the development of a full-stack comment service using TypeScript and Angular, collaborating directly with stakeholders to plan and deliver an epic to clients.',
            'Developed REST API endpoints, database migration scripts, and a recursive frontend comment component for CRUD actions.',
            'Increased log ingestion reliability and eliminated several hours of downtime by implementing a Dead Letter Queue with RabbitMQ, providing visibility into failed messages and ensuring continuous system uptime.',
            'Delivered diverse features across multiple applications as part of a small, agile team, requiring minimal supervision while actively participating in design decisions and implementing full-stack changes across repositories.',
            'Played a key role in reviewing other engineers’ work, identifying potential issues early, and ensuring high standards in code quality.',
        ],
    },
    {
        title: 'Junior Software Engineer',
        company: 'Planview',
        location: 'Vancouver, BC',
        duration: 'Sep 2023 - May 2024',
        description: [
            'Led CI/CD pipeline migration from Jenkins to GitHub Actions, reducing deployment time by 20% and phasing out legacy on-prem servers prone to crashes.',
            'Automated AWS EC2 disk upsizing with Ansible playbooks, massively reducing manual intervention and downtime, freeing up substantial engineering hours.',
            'Developed a deployment monitoring web application using Python and Vue.js, improving visibility into ArgoCD processes.',
            'Designed and configured scalable cloud infrastructure (EKS, EC2, Karpenter) with automated releases and infrastructure management using Terraform on AWS.',
            'Addressed critical infrastructure issues, writing POSIX-compliant scripts and cron jobs to enable self-healing and ensure system resilience.',
        ],
    },
    {
        title: 'Data Engineer COOP',
        company: 'Rogers Communications',
        location: 'Toronto, ON',
        duration: 'May 2022 - Aug 2022',
        description: [
            'Automated workflows and data pipelines using Python and Azure Data Factory, streamlining data processing across systems.',
            'Enhanced Python scripts to dynamically generate SQL stored procedures based on parameters from .xlsx and .csv files, expanding functionality and reducing manual work.',
            'Executed complex SQL queries in DBeaver and MySQL to securely ingest encrypted customer data into Oracle, Hadoop, and Azure databases, ensuring data integrity across platforms.',
        ],
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
                            <p className="text-sm text-gray-500 italic">{experience.location} | {experience.duration}</p>
                            <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                                {experience.description.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;