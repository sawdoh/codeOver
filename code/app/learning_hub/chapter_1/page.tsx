"use client";

import React from 'react';
import Link from 'next/link';
import { Sidebar } from '@/components/ui/Sidebar';
import '@/app/template/learning_hub.css'

const Guide = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="max-w-3xl mx-auto p-4">

        <section className="LHsection" >
          <h1 className="text-5xl font-bold title">Introduction to Investing and Trading in 2024</h1>
          <div className="stock">
            The stock market can be thought of as a giant marketplace where people buy and sell pieces of ownership in companies, called "stocks" or "shares." Just like a market where you buy and sell goods, the stock market is where buyers and sellers come together to trade stocks.
              <br />
              
              <div className='chapter1-picture1' >
                <img src='https://www.investopedia.com/thmb/cOymT7ainOZSwk5xh7KmI0CfRME=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stock_source-d84b531c2d3441a7a0611e8af4d9d750.jpg' alt='Stocks Definition'></img>
                <img src='https://www.investopedia.com/thmb/cR0BHW2wkk6mdsH3zltK5eBOqTI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shares_definition_final_0920-77e9620013c34066ad918d3bcda4faba.jpg' alt='Stocks Definition'></img>
              </div>
            </div>
        </section>

        <section className='LHsection' id='what-is-stock-market'>
         <h2 className='text-4xl font-bold title'>What is the Stock Market?</h2>
          <p className="stock">
            The stock market is where shares of publicly listed companies are bought and sold. When you buy a share, youre buying a small part of that company. For example, if you buy shares of Apple, you own a tiny piece of Apple Inc. If Apple does well and makes more money, the value of your shares goes up. If it doesnt do well, the value of your shares could go down.
          </p> 
          <h1 className='keypoints'>Key Points</h1>
            <li className='element'>Publicly Listed Companies - Companies that offer their shares for sale to the public.</li>
            <li className='element'>Stocks/Shares - Pieces of ownership in a company.</li>
            <li className='element'>Investors - People who buy and sell shares to make money.</li>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/URyVBcDIQxkKB2e6AVRTNoqiRZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stockmarket.asp-d2f34bb1e91444069bc6e9b24cfdf6e8.jpg' alt='Stock Market'></img>
          </div>
        </section>

        <section className="LHsection" id='how-it-works'>
          <h2 className='text-4xl font-bold title'>How does it work?</h2>
          <p className="stock">Think of the stock market like an auction house. When a company wants to raise money, it sells its shares to the public through an Initial Public Offering (IPO). After that, these shares are traded among investors on a stock exchange.</p>
          <p className='stock'>The price of a stock is determined by supply (how many shares are available for sale) and demand (how many people want to buy them). If more people want to buy a stock than sell it, the price goes up. If more people want to sell than buy, the price goes down.</p>
          <h1 className='keypoints'>Key Points</h1>
            <li className='element'>Stock Exchanges: Places where stocks are bought and sold (e.g., NYSE, NASDAQ).</li>
            <li className='element'>Supply and Demand: Determines the price of a stock.</li>
            <li className='element'>Initial Public Offering (IPO): The first time a company sells its stock to the public.</li>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/ehMx6n832OsLgmOWZvEoSrI2jqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IPO-final-1b2b21914247407a9e2f388ba50ab74e.png' alt='IPO'></img>
          </div>
        </section>

        <section className="LHsection" id='key-participants'>
          <h2 className='text-4xl font-bold title'>Key market participants</h2>
          <p className='keypoints'>Several players are involved in the stock market</p>
            <ul className='element'>➣ Retail Investors - Everyday people like you and me who buy and sell stocks.</ul>
            <ul className='element'>➣ Institutional Investors - Large organizations like banks that invest huge sums of money.</ul>
            <ul className='element'>➣ Brokers - Middlemen who help investors buy and sell stocks for a fee.</ul>
            <ul className='element'>➣ Market Makers - Firms that ensure theres enough buying and selling activity.</ul>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/J7jzKFwVJ-lfZN_iGkZX4y1LmUA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/broker.aspfinal-33e95da8ded44831a5703fdd6723f129.jpg' alt='Broker'></img>
          </div>
        </section>

        <section className="LHsection" id='stock-exchanges'>
          <h2 className='text-4xl font-bold title'>Overview of stock exchanges</h2>
          <p className="stock">Stock exchanges are platforms where stocks are traded. Two of the biggest stock exchanges in the world are:</p>
            <ul className='stock'>➣ New York Stock Exchange (NYSE): One of the oldest and largest stock exchanges, known for its large trading floor.</ul>
            <ul className='stock'>➣ NASDAQ: Known for being more tech-focused, where many technology companies like Apple, Microsoft, and Google are listed.</ul>
          <p className='keypoints'>Key Points</p>
            <ul className='element'>Different Stock Exchanges - Different places where you can buy and sell shares.</ul>
            <ul className='element'>Why It Matters - Each exchange has its own rules and types of companies listed.</ul>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/2vLWKERoT9gWjv4K3odUExjPICk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/nyse-amex.asp-final2-0cbee3a365c041d091e947f2368077ba.png' alt='NYSE'></img>
          </div>
        </section>
        
        <Link href="/learning_hub/chapter_2" className="text-blue-500">
          <button className='skibidier'>
            Next Chapter: Type of investments
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Guide;