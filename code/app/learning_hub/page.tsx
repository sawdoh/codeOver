"use client";

import React from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/ui/Sidebar';

const Guide = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-3xl mx-auto p-4">
        <section id="introduction">
          <h1 className="text-6xl font-bold mb-4">Introduction to Investing and Trading in 2024</h1>
          <h2 className='text-4xl font-bold mb-4'>What is Investing and Trading?</h2>
          <p className="mb-4">
            Investing and trading are two different approaches to the stock market. Investing involves buying and holding securities for a long period, while trading involves buying and selling securities for short-term gains.
          </p>
          <p className="mb-4">
            Both strategies have their own risks and rewards. It's important to understand the basics of each before deciding which approach is right for you.
          </p>
        </section>
        <section id="types-of-investments">
          <h2 className='text-4xl font-bold mb-4'>Types of Investments</h2>
          <p className="mb-4">Details about different types of investments...</p>
        </section>
        <section id="basic-trading-concepts">
          <h2 className='text-4xl font-bold mb-4'>Basic Trading Concepts</h2>
          <p className="mb-4">Details about basic trading concepts...</p>
        </section>
        <Link href="/" className="text-blue-500">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Guide;