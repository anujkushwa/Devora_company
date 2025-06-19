import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'Features', to: '/features' },
        { name: 'Pricing', to: '/pricing' },
        { name: 'About', to: '/about' },
    ];

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl italic font-medium tracking-wide">
                            <span className="text-slate-800"></span>
                            <span className="text-indigo-500">Devora</span>
                        </span>
                    </div>


                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="text-gray-700 hover:text-indigo-600 font-medium transition duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#"
                            className="bg-indigo-400 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {menuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded transition"
                                onClick={() => setMenuOpen(false)} // close menu on click
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="#"
                            className="block text-center bg-red-400 text-white px-4 py-2 rounded-xl mt-2 shadow hover:bg-indigo-700 transition"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
