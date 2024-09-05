
// "use client";
// import React, { useState, useEffect } from 'react';
// import { useUser, SignOutButton } from '@clerk/nextjs';
// import { Button } from '@/components/ui/button';
// import { StockChart } from '@/components/ui/StockChart';

// const initialStockData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Stock Price',
//       data: [65, 59, 80, 81, 56, 55, 40],
//       borderColor: 'rgba(75, 192, 192, 1)',
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//     },
//   ],
// };

// const initialStocks = [
//   { shares: 10, entryPrice: 50 },
//   { shares: 5, entryPrice: 75 },
// ];

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000);
//   const [portfolio, setPortfolio] = useState<{ shares: number; entryPrice: number }[]>(initialStocks);
//   const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]);
//   const [trendProgressed, setTrendProgressed] = useState(false);
//   const [lastAction, setLastAction] = useState<'buy' | 'sell' | null>(null);
//   const [popupMessage, setPopupMessage] = useState<string | null>(null);
//   const [transactionOccurred, setTransactionOccurred] = useState(false); // Track if buy/sell occurred

//   useEffect(() => {
//     setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
//   }, [stockData]);

//   const updateStockData = () => {
//     if (!transactionOccurred) {
//       setPopupMessage('Please buy or sell stock before progressing the trend.');
//       return;
//     }

//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2];
//     setStockData({
//       labels: [
//         'January', 'February', 'March', 'April', 'May', 
//         'June', 'July', 'August', 'September', 'October', 
//         'November', 'December'
//       ],
//       datasets: [
//         {
//           label: 'Stock Price',
//           data: newStockPrices,
//           borderColor: 'rgba(255, 99, 132, 1)',
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         },
//       ],
//     });
//     setTrendProgressed(true);
//     setPopupMessage(null);
//     setTransactionOccurred(false); // Reset transaction status after progressing trend
//   };

//   const replaySimulation = () => {
//     setStockData(initialStockData);
//     setPortfolio(initialStocks);
//     setBalance(10000);
//     setTrendProgressed(false);
//     setPopupMessage(null);
//     setTransactionOccurred(false); // Reset transaction status on replay
//   };

//   const buyStock = (numShares: number) => {
//     if (trendProgressed) {
//       setPopupMessage('Cannot buy stocks after progressing the trend.');
//       return;
//     }

//     const totalCost = currentStockPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio([...portfolio, { shares: numShares, entryPrice: currentStockPrice }]);
//       setLastAction('buy');
//       setTransactionOccurred(true); // Mark transaction as occurred
//     } else {
//       setPopupMessage('Insufficient balance to buy stocks.');
//     }
//   };

//   const sellStock = (numShares: number) => {
//     if (trendProgressed) {
//       setPopupMessage('Cannot sell stocks after progressing the trend.');
//       return;
//     }

//     const totalValue = currentStockPrice * numShares;

//     if (portfolio.length === 0) {
//       setPopupMessage('No stocks in the portfolio.');
//       return;
//     }

//     let remainingShares = numShares;
//     const updatedPortfolio = portfolio.reduce<{ shares: number; entryPrice: number }[]>((acc, item) => {
//       if (remainingShares <= 0) {
//         acc.push(item);
//         return acc;
//       }

//       if (item.shares > remainingShares) {
//         acc.push({ shares: item.shares - remainingShares, entryPrice: item.entryPrice });
//         remainingShares = 0;
//       } else {
//         remainingShares -= item.shares;
//       }

//       return acc;
//     }, []);

//     if (remainingShares > 0) {
//       setPopupMessage('Not enough shares to sell.');
//       return;
//     }

//     setPortfolio(updatedPortfolio);
//     setBalance(balance + totalValue);
//     setLastAction('sell');
//     setTransactionOccurred(true); // Mark transaction as occurred
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, item) => total + item.shares * currentStockPrice, 0);
//   };

//   useEffect(() => {
//     if (trendProgressed) {
//       if (lastAction === 'buy') {
//         setPopupMessage('Wrong! You bought stock before (the dip) "progressing the trend".');
//       } else if (lastAction === 'sell') {
//         setPopupMessage('Correct! You sold stock before (the dip) "progressing the trend".');
//       }
//     }
//   }, [trendProgressed]);

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user?.firstName || 'User'}!</p>
//       <SignOutButton>
//         <Button>Sign Out</Button>
//       </SignOutButton>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
//         <p>Current Stock Price: ${currentStockPrice.toFixed(2)}</p>
//         <StockChart data={stockData} />
//         <Button
//           className="mt-4"
//           onClick={updateStockData}
//           disabled={!transactionOccurred} // Disable if no transaction has occurred
//         >
//           Progress Stock Trend
//         </Button>
//         <Button
//           className="mt-4 ml-2"
//           onClick={replaySimulation}
//           disabled={!trendProgressed}
//         >
//           Replay Simulation
//         </Button>
//       </div>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
//         <p>Balance: ${balance.toFixed(2)}</p>
//         <p>Total Portfolio Value: ${calculatePortfolioValue().toFixed(2)}</p>
//         <input
//           type="number"
//           placeholder="Number of shares"
//           className="border p-2 mt-4"
//           id="numShares"
//         />
//         <Button
//           className="mt-4"
//           onClick={() => {
//             const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
//             if (numShares > 0) buyStock(numShares);
//           }}
//           disabled={trendProgressed} // Disable if trend has been progressed
//         >
//           Buy Stock
//         </Button>
//         <Button
//           className="mt-4"
//           onClick={() => {
//             const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
//             if (numShares > 0) sellStock(numShares);
//           }}
//           disabled={trendProgressed} // Disable if trend has been progressed
//         >
//           Sell Stock
//         </Button>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold">Holdings:</h3>
//           {portfolio.length > 0 ? (
//             portfolio.map((item, index) => (
//               <p key={index}>
//                 {item.shares} shares bought at ${item.entryPrice.toFixed(2)} each
//               </p>
//             ))
//           ) : (
//             <p>No holdings</p>
//           )}
//         </div>
//       </div>
//       {popupMessage && (
//         <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded">
//           {popupMessage}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


"use client";
import React, { useState, useEffect } from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { StockChart } from '@/components/ui/StockChart';

const initialStockData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Stock Price',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const initialStocks = [
  { shares: 10, entryPrice: 50 },
  { shares: 5, entryPrice: 75 },
];

const Dashboard = () => {
  const { user } = useUser();
  const [stockData, setStockData] = useState(initialStockData);
  const [balance, setBalance] = useState(10000);
  const [portfolio, setPortfolio] = useState<{ shares: number; entryPrice: number }[]>(initialStocks);
  const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]);
  const [trendProgressed, setTrendProgressed] = useState(false);
  const [lastAction, setLastAction] = useState<'buy' | 'sell' | null>(null);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [transactionOccurred, setTransactionOccurred] = useState(false); // Track if buy/sell occurred

  useEffect(() => {
    setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
  }, [stockData]);

  const updateStockData = () => {
    if (!transactionOccurred) {
      setPopupMessage('Please buy or sell stock before progressing the trend.');
      return;
    }

    const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2];
    setStockData({
      labels: [
        'January', 'February', 'March', 'April', 'May', 
        'June', 'July', 'August', 'September', 'October', 
        'November', 'December'
      ],
      datasets: [
        {
          label: 'Stock Price',
          data: newStockPrices,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    });
    setTrendProgressed(true);
    setPopupMessage(null);
    setTransactionOccurred(false); // Reset transaction status after progressing trend
  };

  const replaySimulation = () => {
    setStockData(initialStockData);
    setPortfolio(initialStocks);
    setBalance(10000);
    setTrendProgressed(false);
    setPopupMessage(null);
    setTransactionOccurred(false); // Reset transaction status on replay
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
      setTransactionOccurred(true); // Mark transaction as occurred
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
    setTransactionOccurred(true); // Mark transaction as occurred
  };

  const calculatePortfolioValue = () => {
    return portfolio.reduce((total, item) => total + item.shares * currentStockPrice, 0);
  };

  useEffect(() => {
    if (trendProgressed) {
      if (lastAction === 'buy') {
        setPopupMessage(`
          Wrong! You bought stock before the dip. 
          <a href="#buy-stock-section" class="button-link bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Go to Buy Stock Section</a>
        `);
      } else if (lastAction === 'sell') {
        setPopupMessage(`
          Correct! You sold stock before the dip. 
          <a href="#sell-stock-section" class="button-link bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Go to Sell Stock Section</a>
        `);
      }
    }
  }, [trendProgressed]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user?.firstName || 'User'}!</p>
      <SignOutButton>
        <Button>Sign Out</Button>
      </SignOutButton>
      <div className="mt-6" id="stock-graph-section">
        <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
        <p>Current Stock Price: ${currentStockPrice.toFixed(2)}</p>
        <StockChart data={stockData} />
        <Button
          className="mt-4"
          onClick={updateStockData}
          disabled={!transactionOccurred} // Disable if no transaction has occurred
        >
          Progress Stock Trend
        </Button>
        <Button
          className="mt-4 ml-2"
          onClick={replaySimulation}
          disabled={!trendProgressed}
        >
          Replay Simulation
        </Button>
      </div>
      <div className="mt-6" id="buy-stock-section">
        <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
        <p>Balance: ${balance.toFixed(2)}</p>
        <p>Total Portfolio Value: ${calculatePortfolioValue().toFixed(2)}</p>
        <input
          type="number"
          placeholder="Number of shares"
          className="border p-2 mt-4"
          id="numShares"
        />
        <Button
          className="mt-4"
          onClick={() => {
            const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
            if (numShares > 0) buyStock(numShares);
          }}
          disabled={trendProgressed} // Disable if trend has been progressed
        >
          Buy Stock
        </Button>
      </div>
      <div className="mt-6" id="sell-stock-section">
        <Button
          className="mt-4"
          onClick={() => {
            const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
            if (numShares > 0) sellStock(numShares);
          }}
          disabled={trendProgressed} // Disable if trend has been progressed
        >
          Sell Stock
        </Button>
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
      </div>
      {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded" dangerouslySetInnerHTML={{ __html: popupMessage }} />
      )}
    </div>
  );
};

export default Dashboard;
