// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white shadow-md z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">My Portfolio</div>
                <div className="space-x-6">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                        About
                    </Link>
                    <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                        Resume
                    </Link>
                    <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                        Projects
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;