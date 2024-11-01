// src/components/Contact.js
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., using Formspree or similar service)
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section
            id="contact"
            className="py-20"
            style={{ backgroundColor: 'rgba(26, 26, 46, 0.5)' }} // Semi-transparent background
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-6 text-white">Contact</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg mb-2 text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring bg-gray-700 text-white"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg mb-2 text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring bg-gray-700 text-white"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-lg mb-2 text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring bg-gray-700 text-white"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            aria-required="true"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
                <div className="flex justify-center space-x-6 mt-8">
                    <a href="mailto:youremail@example.com" aria-label="Email">
                        <FaEnvelope size={30} className="text-gray-300 hover:text-blue-500 transition" />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={30} className="text-gray-300 hover:text-blue-500 transition" />
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={30} className="text-gray-300 hover:text-blue-500 transition" />
                    </a>
                </div>
            </div>
        </section>
    );

};

export default Contact;