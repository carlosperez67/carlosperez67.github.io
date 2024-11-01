// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-transparent z-20">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-white">Carlos Perez</div>
                <div className="space-x-6">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition">
                        Home
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition">
                        About
                    </Link>
                    <Link to="resume" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition">
                        Resume
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition">
                        Projects
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;