import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        // The header is flex container, dark blue background, fixed width for desktop
        <header className="w-full bg-blue-900 shadow-xl">
            {/* Max width container for content centering */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Foundation Name */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white font-extrabold text-xl sm:text-2xl tracking-tight transition duration-300 hover:text-amber-500">
                            Radhakrishnan <span className="text-amber-500">Foundation</span>
                        </Link>
                    </div>

                    {/* Navigation Links (Desktop/Tablet) */}
                    <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {/* Links are styled to be clean and highlight on hover */}
                        <Link 
                            to='/' 
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-amber-300 transition duration-150"
                        >
                            Home
                        </Link>
                        <Link 
                            to='/education' 
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-amber-300 transition duration-150"
                        >
                            Education
                        </Link>
                        <Link 
                            to='/food' 
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-amber-300 transition duration-150"
                        >
                            Food
                        </Link>
                        <Link 
                            to='/empower' 
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-amber-300 transition duration-150"
                        >
                            Empower
                        </Link>
                        <Link 
                            to='/health' 
                            className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 hover:text-amber-300 transition duration-150"
                        >
                            Health
                        </Link>
                    </nav>

                    {/* Placeholder for Mobile Menu Button (since full routing isn't set up, we keep it simple) */}
                    <div className="sm:hidden">
                        <span className="text-white text-sm">Menu</span>
                    </div>
                </div>
            </div>
            
            {/* Mobile Navigation Panel (Hidden by default, would be toggled by JS/state) */}
            <div className="sm:hidden border-t border-blue-800">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to='/' className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-amber-300">Home</Link>
                    <Link to='/education' className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-amber-300">Education</Link>
                    <Link to='/food' className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-amber-300">Food</Link>
                    <Link to='/empower' className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-amber-300">Empower</Link>
                    <Link to='/health' className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 hover:text-amber-300">Health</Link>
                </div>
            </div>
        </header>
    );
}
