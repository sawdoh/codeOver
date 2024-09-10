"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import axios from 'axios';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const API_KEY = 'gr9FE9C1Hqa4vIvKVMI3Burn9sO13BxI';
const SYMBOL = 'AAPL';

interface HistoricalPrice {
  date: string;
  close: number;
}

interface HistoricalDataResponse {
  historical: HistoricalPrice[];
}

const getHistoricalData = async (): Promise<HistoricalPrice[]> => {
  const response = await axios.get<HistoricalDataResponse>(`https://financialmodelingprep.com/api/v3/historical-price-full/${SYMBOL}`, {
    params: {
      apikey: API_KEY,
      from: '2024-08-01',
      to: '2024-08-31',
    },
  });
  return response.data.historical;
};

const generateDateLabels = (startDate: Date, endDate: Date) => {
  const labels: string[] = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    labels.push(currentDate.toDateString());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return labels;
};

const Dashboard = () => {
  const { user } = useUser();
  const [stockData, setStockData] = useState({
    labels: generateDateLabels(new Date('2024-08-01'), new Date('2024-08-10')),
    datasets: [
      {
        label: 'Stock Price',
        data: [], // Initial empty data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });
  const [balance, setBalance] = useState(10000);
  const [portfolio, setPortfolio] = useState([
    { shares: 10, entryPrice: 50 },
    { shares: 5, entryPrice: 75 },
  ]);
  const [currentStockPrice, setCurrentStockPrice] = useState(100);
  const [trendProgressed, setTrendProgressed] = useState(false);
  const [lastAction, setLastAction] = useState<'buy' | 'sell' | null>(null);
  const [transactionOccurred, setTransactionOccurred] = useState(false);
  const [historicalData, setHistoricalData] = useState<HistoricalPrice[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);


  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await getHistoricalData();
        if (data && data.length > 0) {
          const filteredData = data
            .filter((item) => {
              const date = new Date(item.date);
              return date >= new Date('2024-08-01') && date <= new Date('2024-08-31');
            })
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Sort in ascending order
          setHistoricalData(filteredData);

          const initialData = filteredData.slice(0, 10); // August 1 to 10 data
          setStockData({
            labels: generateDateLabels(new Date('2024-08-01'), new Date('2024-08-10')),
            datasets: [
              {
                label: 'Stock Price',
                data: initialData.map((item) => item.close),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
              },
            ],
          });

          const latestData = initialData[initialData.length - 1];
          setCurrentStockPrice(latestData.close);
        } else {
          console.error('No historical data found');
        }
      } catch (err) {
        console.error('Error fetching historical data:', err);
      }
    };

    fetchStockData();
  }, []);

  const updateStockData = () => {
    if (!transactionOccurred) {
      setPopupMessage('Please buy or sell stock before progressing the trend.');
      return;
    }

    const additionalData = historicalData.slice(10); // August 16 to 30 data

    setStockData((prevData) => {
      const newLabels = generateDateLabels(new Date('2024-08-01'), new Date('2024-08-30'));

      const updatedData = {
        labels: newLabels,
        datasets: [{
          label: 'Stock Price',
          data: [
            ...prevData.datasets[0].data,
            ...additionalData.map((item) => item.close)
          ],
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        }],
      };

      // Update the current stock price to the latest price in the new data
      const latestPrice = additionalData[additionalData.length - 1]?.close || currentStockPrice;
      setCurrentStockPrice(latestPrice);

      setTrendProgressed(true);
      setPopupMessage(null);
      setTransactionOccurred(false);

      return updatedData;
    });
  };

  const replaySimulation = () => {
    setStockData({
      labels: generateDateLabels(new Date('2024-08-01'), new Date('2024-08-10')),
      datasets: [
        {
          label: 'Stock Price',
          data: historicalData.slice(0, 10).map((item) => item.close),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    });
    setPortfolio([
      { shares: 10, entryPrice: 50 },
      { shares: 5, entryPrice: 75 },
    ]);
    setBalance(10000);
    setTrendProgressed(false);
    setPopupMessage(null);
    setTransactionOccurred(false);
  };

  const buyStock = (numShares: number) => {
    if (trendProgressed) {
      setPopupMessage('Cannot buy stocks after progressing the trend.');
      return;
    }

    const totalCost = currentStockPrice * numShares;

    if (balance >= totalCost) {
      setBalance(balance - totalCost);
      setPortfolio([...portfolio, { shares: numShares, entryPrice: currentStockPrice }]);
      setLastAction('buy');
      setTransactionOccurred(true);
    } else {
      setPopupMessage('Insufficient balance to buy stocks.');
    }
  };

  const sellStock = (numShares: number) => {
    if (trendProgressed) {
      setPopupMessage('Cannot sell stocks after progressing the trend.');
      return;
    }

    const totalValue = currentStockPrice * numShares;

    if (portfolio.length === 0) {
      setPopupMessage('No stocks in the portfolio.');
      return;
    }

    let remainingShares = numShares;
    const updatedPortfolio = portfolio.reduce<{ shares: number; entryPrice: number }[]>((acc, item) => {
      if (remainingShares <= 0) {
        acc.push(item);
        return acc;
      }

      if (item.shares > remainingShares) {
        acc.push({ shares: item.shares - remainingShares, entryPrice: item.entryPrice });
        remainingShares = 0;
      } else {
        remainingShares -= item.shares;
      }

      return acc;
    }, []);

    if (remainingShares > 0) {
      setPopupMessage('Not enough shares to sell.');
      return;
    }

    setPortfolio(updatedPortfolio);
    setBalance(balance + totalValue);
    setLastAction('sell');
    setTransactionOccurred(true);
  };

  const calculatePortfolioValue = () => {
    return portfolio.reduce((total, item) => total + item.shares * currentStockPrice, 0);
  };

  useEffect(() => {
    if (trendProgressed) {
      if (lastAction === 'buy') {
        setPopupMessage(`
          Correct! You bought stock before the surge. 
          <a href="#buy-stock-section" class="button-link bg-green-500 text-white font-bold py-2 px-4 rounded">That was a good decision, sales is likely to continue to rise with apple products! (especially since the iPad is taking off)</a>
        `);
      } else if (lastAction === 'sell') {
        setPopupMessage(`
          Wrong! You sold stock before the surge. 
          <a href="#sell-stock-section" class="button-link bg-red-500 text-white font-bold py-2 px-4 rounded">Unfornately, the loss of a semi-high ranking worker is not enough to bring the stocks amount down by that much! It would have to be the CEO if that were to happen!</a>
        `);
      }
    }
  }, [trendProgressed]);

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Real Life Simulation: Apple</h1>
      <p>Welcome! In this simulation Apple is coming from a high from the great sales of the iPad. However, Apple also announced that its well-regarded chief financial officer is leaving the post after more than 10 years.
         Refer to your portfolio to make your decisions!</p>
      <h1 className="text-2xl font-bold mb-4">Apple Stock Simulation Dashboard</h1>
      <div className="mt-4">
        <p>Current Stock Price: ${currentStockPrice.toFixed(2)}</p>
      </div>
      <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
      <Line
        data={stockData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top' as const,
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => `Price: $${tooltipItem.raw}`,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date',
              },
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Price',
              },
              ticks: {
                callback: (value) => `$${value}`,
              },
            },
          },
        }}
      />
      </div>
      <br />
      <div className="mb-4">
        <Button variant={'inverted'} onClick={updateStockData}>Progress Stock Trend</Button>
        <Button variant={'inverted'} onClick={replaySimulation} className="ml-2">Replay Simulation</Button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
        <p className="text-xl font-bold">Balance: ${balance.toFixed(2)}</p>
        <p className="text-lg font-bold">Total Portfolio Value: ${calculatePortfolioValue().toFixed(2)}</p>
      </div>
      <div className="mt-4" id="buy-stock-section">
        <h2 className="text-xl font-bold">Buy Stock</h2>
        <Button variant={'inverted'} onClick={() => buyStock(1)}>Buy 1 Share</Button>
        <Button variant={'inverted'} onClick={() => buyStock(5)} className="ml-2">Buy 5 Shares</Button>
      </div>
      <div className="mt-4" id="sell-stock-section">
        <h2 className="text-xl font-bold">Sell Stock</h2>
        <Button variant={'inverted'} onClick={() => sellStock(1)}>Sell 1 Share</Button>
        <Button variant={'inverted'} onClick={() => sellStock(5)} className="ml-2">Sell 5 Shares</Button>
      </div>
      <div className="mt-4">
          <h3 className="text-lg font-semibold">Holdings:</h3>
          {portfolio.length > 0 ? (
            portfolio.map((item, index) => (
              <p key={index}>
                {item.shares} shares bought at ${item.entryPrice.toFixed(2)} each
              </p>
            ))
          ) : (
            <p>No holdings</p>
          )}
        </div>
      {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded">
          <div dangerouslySetInnerHTML={{ __html: popupMessage }} />
        </div>
      )}
    </div>
    
  );
};

export default Dashboard;
