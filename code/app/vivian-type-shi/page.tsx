"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const API_KEY = 'gr9FE9C1Hqa4vIvKVMI3Burn9sO13BxI';
const SYMBOL = 'AAPL';

const getHistoricalData = async () => {
  const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${SYMBOL}`, {
    params: {
      apikey: API_KEY,
      from: '2024-08-01', // Optional
      to: '2024-08-31',   // Optional
    },
  });
  return response.data;
};

const Page = () => {
  const [startingAmount, setStartingAmount] = useState(10000);
  const [sharesOwned, setSharesOwned] = useState(0);
  const [stockPrice, setStockPrice] = useState<number | null>(null);
  const [stockTime, setStockTime] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [historicalData, setHistoricalData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchStockData = async () => {
        try {
            const data = await getHistoricalData();
            if (data && data.historical && data.historical.length > 0) {
              const filteredData = data.historical.filter((item: any) => {
                const date = new Date(item.date);
                return date >= new Date('2024-08-01') && date <= new Date('2024-08-31');
              }).sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort in ascending order
              setHistoricalData(filteredData);
              const latestData = filteredData[0];
              setStockPrice(latestData.close);
              setStockTime(latestData.date);
            } else {
              console.error('No historical data found');
            }
          } catch (err) {
            console.error('Error fetching historical data:', err);
          }
        };

    fetchStockData();
  }, []);

  const handleStart = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    setIsStarted(true);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < historicalData.length) {
          const nextData = historicalData[nextIndex];
          setStockPrice(nextData.close);
          setStockTime(nextData.date);
          return nextIndex;
        } else {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return prevIndex;
        }
      });
    }, 10000); // Update every 10 seconds
  };

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

  const handleSellShares = () => {
    const sharesToSell = parseInt(inputValue);
    if (stockPrice && sharesToSell > 0 && sharesToSell <= sharesOwned) {
      const totalRevenue = sharesToSell * stockPrice;
      setStartingAmount(startingAmount + totalRevenue);
      setSharesOwned(sharesOwned - sharesToSell);
    } else {
      alert('Not enough shares to sell');
    }
  };

  const chartData = {
    labels: historicalData.slice(0, currentIndex + 1).map(data => data.date),
    datasets: [
      {
        label: 'AAPL Stock Price',
        data: historicalData.slice(0, currentIndex + 1).map(data => data.close),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  return (
    <div>
      <h1>Stock Trading Page</h1>
      <p>Amount Left: ${startingAmount.toFixed(2)}</p>
      <p>Shares Owned: {sharesOwned}</p>
      {stockPrice !== null && stockTime !== null && (
        <div>
          <p>Stock Price at {stockTime}: ${stockPrice.toFixed(2)}</p>
          <p>Total Share Value: ${(sharesOwned * stockPrice).toFixed(2)}</p>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter number of shares"
          />
          <Button onClick={handleBuyShares}>Buy Shares</Button>
          <Button onClick={handleSellShares}>Sell Shares</Button>
        </div>
      )}
      {!isStarted && <Button onClick={handleStart}>Start</Button>}
      {historicalData.length > 0 && <Line data={chartData} />}
      <SignOutButton />
    </div>
  );
};

export default Page;