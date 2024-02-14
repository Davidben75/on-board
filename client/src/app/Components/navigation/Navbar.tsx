'use client'
import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='mx-auto p-4 bg-indigo-900'>
        <div className='container flex justify-between items-center'>
            <a className='inline-block text-white' href="/">
                Home
            </a>
            <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
                <svg
                    className={`w-6 h-6 text-white ${menuOpen ? 'hidden' : 'block'}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16m-7 6h7'
                    />
                </svg>
                <svg
                    className={`w-6 h-6 text-white ${menuOpen ? 'block' : 'hidden'}`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                    />
                </svg>
            </div>
            <nav className={`lg:flex lg:items-center ${menuOpen ? 'block' : 'hidden'} ${menuOpen ? 'flex-col' : ''}`}>
                <ul className='flex flex-col lg:flex-row'>
                    <li className='mr-3'>
                        <a className='inline-block text-white' href="/about">
                            About us
                        </a>
                    </li>
                    <li className='mr-3'>
                        <a href="/subscribe" className='inline-block text-white'>
                            Sign In
                        </a>
                    </li>
                    <li className='mr-3'>
                        <a href="/login" className='inline-block text-white'>
                            Log In
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    
    );
};

export default Navbar;
