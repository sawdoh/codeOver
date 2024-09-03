"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Skibidi Bar</Link>
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
          <li className="text-white md:ml-4">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white md:ml-4">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white md:ml-4">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-white md:ml-4">
            <Link href="/contact">Contact</Link>
          </li>
          <SignedOut>
            <li className="text-white md:ml-4">
              <SignInButton />
            </li>
          </SignedOut>
          <SignedIn>
            <li className="text-white md:ml-4">
              <UserButton />
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
