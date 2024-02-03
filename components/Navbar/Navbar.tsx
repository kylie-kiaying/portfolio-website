"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-transparent py-4 px-4 md:px-8 z-10">
            <div>
                {/* Name */}
                <span className="text-white font-bold">KYLIE CHUA</span>
            </div>

            {/* Hamburger Menu Button (visible on small screens) */}
            <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Links to Sections (hidden on small screens) */}
            <div className={`flex flex-col md:flex-row md:items-center absolute md:static bg-black md:bg-transparent top-[100%] left-0 w-full md:w-auto transition-all duration-300 ease-in ${isMenuOpen ? 'opacity-100' : 'opacity-0 invisible'} md:opacity-100 md:visible`}>
                <Link href="#overview"><span className="text-white mx-3 my-2 md:my-0 cursor-pointer">Overview</span></Link>
                <Link href="#experience"><span className="text-white mx-3 my-2 md:my-0 cursor-pointer">Experience</span></Link>
                <Link href="#skills"><span className="text-white mx-3 my-2 md:my-0 cursor-pointer">Skills</span></Link>
                <Link href="#socials"><span className="text-white mx-3 my-2 md:my-0 cursor-pointer">Socials</span></Link>
            </div>

            {/* Social Links (adjust visibility or layout as needed) */}
            <div className="hidden md:flex items-center">
                <a href="https://github.com/kylie-kiaying" className="text-white mx-2">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/kylie-kia-ying-chua/" className="text-white mx-2">
                    <FaLinkedinIn size={24} />
                </a>
                <a href="mailto:kylie.kiayingchua@gmail.com" className="text-white mx-2">
                    <FaEnvelope size={24} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
