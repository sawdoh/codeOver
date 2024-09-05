"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import '@/app/template/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4" id='navbar'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" ><span id='Logo'>NPT</span></Link>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/" className="text-white md:ml-4">Home</Link>
        </li>
        <li>
          <Link href="/learning_hub/chapter_1" className="text-white md:ml-4">Guide</Link>
        </li>
        <li>
          <Link href="/about" className="text-white md:ml-4">About</Link>
        </li>
        <SignedOut>
          <li>
            <div className="text-white md:ml-4">
              <SignInButton />
            </div>
          </li>
        </SignedOut>
        <SignedIn>
          <li>
            <div className="text-white md:ml-4">
              <UserButton />
            </div>
          </li>
        </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
