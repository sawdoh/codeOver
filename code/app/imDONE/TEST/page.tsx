"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Page = () => {
  const [startingAmount, setStartingAmount] = useState(10000);
  const [sharesOwned, setSharesOwned] = useState(0);
  const [stockPrice, setStockPrice] = useState<number | null>(null);
  const [stockTime, setStockTime] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=DY165DZG4Z15CZVY';

    console.log('Request initiated...');
    console.log('URL:', url);

    axios.get(url, {
      headers: { 'User-Agent': 'axios' }
    })
      .then(response => {
        console.log('Response received...');
        console.log('Status Code:', response.status);

        if (response.status !== 200) {
          console.error('Unexpected Status:', response.status);
        } else {
          const data = response.data['Time Series (5min)'];
          const firstTiming = Object.keys(data)[0];
          const firstPrice = parseFloat(data[firstTiming]['1. open']);
          setStockPrice(firstPrice);
          setStockTime(firstTiming);
        }
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  const handleBuyShares = () => {
    const sharesToBuy = parseInt(inputValue);
    if (stockPrice && sharesToBuy > 0) {
      const totalCost = sharesToBuy * stockPrice;
      if (totalCost <= startingAmount) {
        setStartingAmount(startingAmount - totalCost);
        setSharesOwned(sharesOwned + sharesToBuy);
      } else {
        alert('Not enough money to buy the shares');
      }
    }
  };

  const chartData = {
    labels: stockTime ? [stockTime] : [],
    datasets: [
      {
        label: 'IBM Stock Price',
        data: stockPrice ? [stockPrice] : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  return (
    <div>
      <h1>Stock Trading Page</h1>
      <p>Total Amount: ${startingAmount.toFixed(2)}</p>
      <p>Shares Owned: {sharesOwned}</p>
      {stockPrice !== null && stockTime !== null && (
        <div>
          <p>Stock Price at {stockTime}: ${stockPrice.toFixed(2)}</p>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter number of shares"
          />
          <Button onClick={handleBuyShares}>Buy Shares</Button>
        </div>
      )}
      {stockPrice !== null && stockTime !== null && <Line data={chartData} />}
      <SignOutButton />
    </div>
  );
};

export default Page;