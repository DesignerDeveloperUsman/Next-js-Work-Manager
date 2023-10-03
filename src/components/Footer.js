import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-center space-x-4">
                {/* Social Icons */}
                <a href="#" className="text-blue-900 hover:text-blue-300 transition duration-300">
                    <FaFacebook scale={7} size={30} color='grey' />
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-300 transition duration-300">
                    <FaTwitter size={30} color='orange' />
                </a>
                <a href="#" className="text-yellow-900 hover:text-blue-300 transition duration-300">
                    <FaLinkedin size={30} color='white' />
                </a>
                <a href="#" className="text-blue-900 hover:text-blue-300 transition duration-300">
                    <FaInstagram size={30} color='yellow' />
                </a>
            </div>
            <div className="text-center bg-blue-900 mt-4">
                &copy; {currentYear} Usman Ali. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
