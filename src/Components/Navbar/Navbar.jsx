'use client';

import Image from 'next/image';

export default function Navbar() {
    return (
        <div className="navbar w-11/12 mx-auto py-8">
            {/* START */}
            <div className="flex-1 flex items-center space-x-6">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="Logo" width={24} height={24} />
                    <span className="text-xl font-semibold text-gray-800">SalesRank.AI</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-4">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">About</a></li>
                        <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-600">Consulting</a></li>
                        <li><a href="#" className="hover:text-blue-600">AI Coach</a></li>
                    </ul>
                </div>
            </div>

            {/* END */}
            <div className="flex-none">
                {/* Mobile Dropdown */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">About</a></li>
                        <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-600">Consulting</a></li>
                        <li><a href="#" className="hover:text-blue-600">AI Coach</a></li>
                    </ul>
                </div>

                {/* Get Started Button */}
                <a href="#" className="ml-4 border border-gray-800 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                    Get started
                </a>
            </div>
        </div>
    );
}