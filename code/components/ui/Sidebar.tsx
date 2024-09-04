import React, { useState } from 'react';
import Link from 'next/link';
import '@/app/template/sidebar.css';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="toggle-button">
        {isVisible ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
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
        )}
      </button>
      {isVisible && (
        <div className="sidebar">
          <ul>
            <li><Link href="#introduction">1. Introduction to Stock Market</Link></li>
            <ul>
              <li><Link href="#what-is-stock-market">What is the stock market?</Link></li>
              <li><Link href="#how-it-works">How does it work?</Link></li>
              <li><Link href="#key-participants">Key market participants</Link></li>
              <li><Link href="#stock-exchanges">Overview of stock exchanges</Link></li>
            </ul>
            <li><Link href="#types-of-investments">2. Types of Investments</Link></li>
            <ul>
              <li><Link href="#stocks">Stocks</Link></li>
              <li><Link href="#bonds">Bonds</Link></li>
              <li><Link href="#etfs-mutual-funds">ETFs and Mutual Funds</Link></li>
              <li><Link href="#options-derivatives">Options and Derivatives</Link></li>
              <li><Link href="#cryptocurrencies">Cryptocurrencies</Link></li>
            </ul>
            <li><Link href="#basic-trading-concepts">3. Basic Trading Concepts</Link></li>
            <ul>
              <li><Link href="#buy-sell-orders">Buy and Sell Orders</Link></li>
              <li><Link href="#long-short-positions">Long vs. Short Positions</Link></li>
              <li><Link href="#bid-ask-spread">Bid-Ask Spread</Link></li>
              <li><Link href="#margin-trading">Margin Trading and Leverage</Link></li>
            </ul>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Sidebar };