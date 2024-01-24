// components/Navbar.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-transparent py-4 px-8 z-10">
            <div>
                {/* Name */}
                <span className="text-white font-bold">KYLIE CHUA</span>
            </div>

            <div className="flex">
                {/* Links to Sections */}
                <Link href="#overview"><span className="text-white mx-3 cursor-pointer">Overview</span></Link>
                <Link href="#experience"><span className="text-white mx-3 cursor-pointer">Experience</span></Link>
                <Link href="#skills"><span className="text-white mx-3 cursor-pointer">Skills</span></Link>
                <Link href="#socials"><span className="text-white mx-3 cursor-pointer">Socials</span></Link>
            </div>

            <div className="flex items-center">
                {/* Social Links*/}
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
