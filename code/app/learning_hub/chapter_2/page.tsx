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
          <h1 className="text-5xl font-bold title">Types of Investments</h1>
          <div className="stock">
            Investing isn't just about buying stocks. There are several different types of investments, each with its own benefits and risks. Knowing the types of investments can help you decide which ones are best for your financial goals and risk tolerance.

              <br />
              
              <div className='chapter1-picture1'>
                <img src='https://www.investopedia.com/thmb/G7iU-8N0W05mo9jIFAGsEFIUOOw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/investing.asp-final-9cbfccbd50344a828ddf1882a2fdc07c.png' alt='Investing Definition'></img>
              </div>
            </div>
        </section>

        <section className='LHsection' id='stocks'>
         <h2 className='text-4xl font-bold title'>Stocks</h2>
          <p className="stock">
            Stocks represent ownership in a company. When you buy a stock, you're buying a small piece of that company. If the company does well, the value of your stock may go up, and you can make money by selling it at a higher price. If the company doesnt perform well, the stock price can go down, and you could lose money.
          </p> 
          <div id='stock-types'>
          <p>Common Stocks: Most people invest in common stocks. They usually give you voting rights in the companys decisions and can pay dividends (a share of the companys profits) to you. </p>
          <p>Preferred Stocks: These usually dont give you voting rights, but they offer a fixed dividend. They are seen as less risky than common stocks but offer less potential for big gains.</p>
          </div>

        </section>

        <section className='LHsection' id='bonds'>
         <h2 className='text-4xl font-bold title'>Bonds</h2>
          <p className="stock">
            Bonds are essentially loans that you give to companies or governments. When you buy a bond, you're lending money to the issuer (like a company or government), and they promise to pay you back the amount with interest over a specific period.
          </p> 
          <h1 className='keypoints'>Types of Bonds</h1>
            <li className='element'>Government Bonds: Issued by national governments (like U.S. Treasury bonds). They are considered very safe because the government is unlikely to default on its payments.</li>
            <li className='element'>Municipal Bonds: Issued by local governments (like states or cities) to fund public projects like schools or highways.</li>
            <li className='element'>Corporate Bonds: Issued by companies to raise money for various purposes. They can offer higher returns than government bonds but come with more risk.</li>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/cmTX7hvFPvihzHj6_N3XXwpXNws=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bond-final-f7932c780bc246cbad6c254febe2d0cd.png' alt='Bonds'></img>
          </div>
        </section>

        <section className="LHsection" id='etfs-mutual-funds'>
          <h2 className='text-4xl font-bold title'>ETFs and Mutual Funds</h2>
          <p className="stock">ETFs and mutual funds allow you to invest in a collection of stocks, bonds, or other assets all at once, instead of buying them individually. This is a way to diversify your investment, meaning you spread your risk across many different companies or assets.</p>
            <li className='element'>ETFs (Exchange-Traded Funds): These are traded on stock exchanges like individual stocks. They often have lower fees and are known for being more flexible than mutual funds.</li>
            <li className='element'>Mutual Funds: These are managed by professional fund managers who decide what to invest in. They are generally bought and sold at the end of the trading day and can have higher fees.</li>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/Lr9gYbzZFRA3pRNIRzG8Ita97ko=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EFT_final-45a9ca8cf7e948608a3b8dae38b66393.png' alt='ETFS'></img>
            <img src='https://www.investopedia.com/thmb/REmHoFbNUxMkIR4bCmtNpBtaQ0M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mutualfund-final-253e20b35df7479b8afb203b56c934c2.png' alt='Mutual Funds'></img>
          </div>
        </section>

        <section className="LHsection" id='options-derivatives'>
          <h2 className='text-4xl font-bold title'>Options and Derivatives</h2>
          <p className="stock">Options and derivatives are more advanced types of investments. They allow you to bet on the future price of an asset, like a stock or commodity, without actually owning the asset.</p>
          <ul>➣ Options: A contract that gives you the right, but not the obligation, to buy or sell a stock at a specific price within a certain timeframe. There are two types: calls (betting the price will go up) and puts (betting the price will go down).</ul>
          <br />  
            <ul>➣ Derivatives: Financial instruments that derive their value from the price of an underlying asset. They are typically used by more advanced investors to hedge against risk or to speculate.</ul>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/Ij90rBh0YfPpgcKQBqW6kNKVRKw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Option-fe0c0ee9204c4a50a281e728fb4c7cab-c571c7af929e4b8587c5a28ad9905f53.jpg' alt='Options-derivatives'></img>
          </div>
        </section>

        <section className="LHsection" id='cryptocurrencies'>
          <h2 className='text-4xl font-bold title'>Cryptocurrencies</h2>
          <p className="stock">Cryptocurrencies are digital or virtual currencies that use cryptography for security. They are decentralized and typically run on blockchain technology. Bitcoin and Ethereum are two popular examples.</p>
          <li className='element'>Volatility: Cryptocurrencies are known for their significant price swings.</li>
          <li className='element'>Potential High Returns: While highly risky, some people invest in cryptocurrencies for the potential of high returns.</li>
          <div className='chapter1-picture1'>
            <img src='https://www.investopedia.com/thmb/RYd9C7xdsi1YM4MghfHfOYb_gxo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TermDefinitions_crypto_final-940e93a6cb5341999a5d735fbf04fbfe.png' alt='Cryptocurrency'></img>
          </div>
        </section>
        
        <Link href="/learning_hub/chapter_1" className="text-blue-500">
          <button className='skibidier'>
            Prev Chapter: Introduction to Stock Market
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Guide;