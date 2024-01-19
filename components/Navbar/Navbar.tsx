import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-lg font-semibold">
            <Link href="/">
              Kylie Chua
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/about">ABOUT</Link>
          <Link href="/experience">EXPERIENCE</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
