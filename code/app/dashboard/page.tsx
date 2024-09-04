// "use client"; // Ensure this is present if using Client Components

// import React, { useState } from 'react';
// import { useUser, SignOutButton } from '@clerk/nextjs';
// import { Button } from '@/components/ui/button';
// import { StockChart } from '@/components/ui/StockChart'; // Correct relative path

// // Initial mock data for the stock graph
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

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);

//   // Function to update stock data dynamically
//   const updateStockData = () => {
//     setStockData({
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'],
//       datasets: [
//         {
//           label: 'Stock Price',
//           data: [65, 59, 80, 81, 56, 55, 40,70, 65, 90, 85, 60],
//           borderColor: 'rgba(153, 102, 255, 1)',
//           backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         },
//       ],
//     });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user?.firstName || 'User'}!</p>
//       <SignOutButton >
//         <Button>Sign Out</Button>
//       </SignOutButton>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
//         <StockChart data={stockData} />
//         <Button className="mt-4" onClick={updateStockData}>Update Stock Data</Button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// "use client";

// import React, { useState } from 'react';
// import { useUser, SignOutButton } from '@clerk/nextjs';
// import { Button } from '@/components/ui/button';
// import { StockChart } from '@/components/ui/StockChart'; 

// const initialStockData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Stock Price',
//       data: [65, 59, 80, 81, 56, 55, 30],
//       borderColor: 'rgba(75, 192, 192, 1)',
//       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//     },
//   ],
// };

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);

//   const updateStockData = () => {
//     setStockData({
//       labels: [
//         'January', 'February', 'March', 'April', 'May', 
//         'June', 'July', 'August', 'September', 'October', 
//         'November', 'December'
//       ],
//       datasets: [
//         {
//           label: 'Stock Price',
//           data: [65, 59, 80, 81, 56, 55, 30, 20, 15, 10, 5, 2], // V downtrend data
//           borderColor: 'rgba(255, 99, 132, 1)',
//           backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         },
//       ],
//     });
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user?.firstName || 'User'}!</p>
//       <SignOutButton>
//         <Button>Sign Out</Button>
//       </SignOutButton>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
//         <StockChart data={stockData} />
//         <Button className="mt-4" onClick={updateStockData}>Update Stock Data</Button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// "use client";

// import React, { useState } from 'react';
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

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000); // User's starting balance
//   const [portfolio, setPortfolio] = useState<{ shares: number; stockPrice: number }[]>([]);

//   const updateStockData = () => {
//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2]; // V downtrend data
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

//     // Update portfolio values based on new stock prices
//     setPortfolio((prevPortfolio) =>
//       prevPortfolio.map((item, index) => ({
//         shares: item.shares,
//         stockPrice: newStockPrices[index % newStockPrices.length],
//       }))
//     );
//   };

//   const buyStock = (numShares: number) => {
//     const currentPrice = stockData.datasets[0].data[stockData.datasets[0].data.length - 1];
//     const totalCost = currentPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio([...portfolio, { shares: numShares, stockPrice: currentPrice }]);
//     } else {
//       alert("Insufficient balance to buy stocks.");
//     }
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, item) => total + item.shares * item.stockPrice, 0);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user?.firstName || 'User'}!</p>
//       <SignOutButton>
//         <Button>Sign Out</Button>
//       </SignOutButton>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
//         <StockChart data={stockData} />
//         <Button className="mt-4" onClick={updateStockData}>Update Stock Data</Button>
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
//         >
//           Buy Stock
//         </Button>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold">Holdings:</h3>
//           {portfolio.length > 0 ? (
//             portfolio.map((item, index) => (
//               <p key={index}>
//                 {item.shares} shares at ${item.stockPrice.toFixed(2)} each
//               </p>
//             ))
//           ) : (
//             <p>No holdings</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



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

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000); // User's starting balance
//   const [portfolio, setPortfolio] = useState<{ shares: number; stockPrice: number }[]>([]);
//   const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]); // Latest stock price

//   useEffect(() => {
//     // Update the current stock price whenever stock data changes
//     setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
//   }, [stockData]);

//   const updateStockData = () => {
//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2]; // V downtrend data
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

//     // Update portfolio values based on new stock prices
//     setPortfolio((prevPortfolio) =>
//       prevPortfolio.map((item, index) => ({
//         shares: item.shares,
//         stockPrice: newStockPrices[index % newStockPrices.length],
//       }))
//     );
//   };

//   const buyStock = (numShares: number) => {
//     const totalCost = currentStockPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio([...portfolio, { shares: numShares, stockPrice: currentStockPrice }]);
//     } else {
//       alert("Insufficient balance to buy stocks.");
//     }
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, item) => total + item.shares * item.stockPrice, 0);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user?.firstName || 'User'}!</p>
//       <SignOutButton>
//         <Button>Sign Out</Button>
//       </SignOutButton>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
//         <p>Current Stock Price: ${currentStockPrice.toFixed(2)}</p> {/* Display current stock price */}
//         <StockChart data={stockData} />
//         <Button className="mt-4" onClick={updateStockData}>Update Stock Data</Button>
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
//         >
//           Buy Stock
//         </Button>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold">Holdings:</h3>
//           {portfolio.length > 0 ? (
//             portfolio.map((item, index) => (
//               <p key={index}>
//                 {item.shares} shares at ${item.stockPrice.toFixed(2)} each
//               </p>
//             ))
//           ) : (
//             <p>No holdings</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// prototype 1.0
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

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000); // User's starting balance
//   const [portfolio, setPortfolio] = useState<number[]>([]); // Store only the number of shares
//   const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]); // Latest stock price

//   useEffect(() => {
//     // Update the current stock price whenever stock data changes
//     setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
//   }, [stockData]);

//   const updateStockData = () => {
//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2]; // V downtrend data
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
//   };

//   const buyStock = (numShares: number) => {
//     const totalCost = currentStockPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio((prevPortfolio) => [...prevPortfolio, numShares]);
//     } else {
//       alert("Insufficient balance to buy stocks.");
//     }
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, numShares) => total + numShares * currentStockPrice, 0);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <p>Welcome, {user?.firstName || 'User'}!</p>
//       <SignOutButton>
//         <Button>Sign Out</Button>
//       </SignOutButton>
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
//         <p>Current Stock Price: ${currentStockPrice.toFixed(2)}</p> {/* Display current stock price */}
//         <StockChart data={stockData} />
//         <Button className="mt-4" onClick={updateStockData}>Update Stock Data</Button>
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
//         >
//           Buy Stock
//         </Button>
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold">Holdings:</h3>
//           {portfolio.length > 0 ? (
//             portfolio.map((numShares, index) => (
//               <p key={index}>
//                 {numShares} shares at ${currentStockPrice.toFixed(2)} each
//               </p>
//             ))
//           ) : (
//             <p>No holdings</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// prototype 2.0
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

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000); // User's starting balance
//   const [portfolio, setPortfolio] = useState<{ shares: number; entryPrice: number }[]>([]);
//   const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]); // Latest stock price

//   useEffect(() => {
//     // Update the current stock price whenever stock data changes
//     setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
//   }, [stockData]);

//   const updateStockData = () => {
//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2]; // V downtrend data
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
//   };

//   const buyStock = (numShares: number) => {
//     const totalCost = currentStockPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio([...portfolio, { shares: numShares, entryPrice: currentStockPrice }]);
//     } else {
//       alert("Insufficient balance to buy stocks.");
//     }
//   };

//   const sellStock = (numShares: number) => {
//     const totalValue = currentStockPrice * numShares;

//     if (portfolio.length === 0) {
//       alert("No stocks in the portfolio.");
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
//       alert("Not enough shares to sell.");
//       return;
//     }

//     setPortfolio(updatedPortfolio);
//     setBalance(balance + totalValue);
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, item) => total + item.shares * currentStockPrice, 0);
//   };

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
//         <Button className="mt-4" onClick={updateStockData}>Progress Stock Trend</Button>
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
//         >
//           Buy Stock
//         </Button>
//         <Button
//           className="mt-4"
//           onClick={() => {
//             const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
//             if (numShares > 0) sellStock(numShares);
//           }}
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
//     </div>
//   );
// };

// export default Dashboard;


// // prototpye 3.0 revert
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

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000); // User's starting balance
//   const [portfolio, setPortfolio] = useState<{ shares: number; entryPrice: number }[]>([]);
//   const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]); // Latest stock price

//   useEffect(() => {
//     // Update the current stock price whenever stock data changes
//     setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
//   }, [stockData]);

//   const updateStockData = () => {
//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2]; // V downtrend data
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
//   };

//   const replaySimulation = () => {
//     setStockData(initialStockData); // Reset the stock data
//     setPortfolio([]); // Clear the portfolio
//     setBalance(10000); // Reset the balance to the initial state
//   };

//   const buyStock = (numShares: number) => {
//     const totalCost = currentStockPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio([...portfolio, { shares: numShares, entryPrice: currentStockPrice }]);
//     } else {
//       alert("Insufficient balance to buy stocks.");
//     }
//   };

//   const sellStock = (numShares: number) => {
//     const totalValue = currentStockPrice * numShares;

//     if (portfolio.length === 0) {
//       alert("No stocks in the portfolio.");
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
//       alert("Not enough shares to sell.");
//       return;
//     }

//     setPortfolio(updatedPortfolio);
//     setBalance(balance + totalValue);
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, item) => total + item.shares * currentStockPrice, 0);
//   };

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
//         <Button className="mt-4" onClick={updateStockData}>Progress Stock Trend</Button>
//         <Button className="mt-4 ml-2" onClick={replaySimulation}>Replay Simulation</Button>
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
//         >
//           Buy Stock
//         </Button>
//         <Button
//           className="mt-4"
//           onClick={() => {
//             const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
//             if (numShares > 0) sellStock(numShares);
//           }}
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
//     </div>
//   );
// };

// export default Dashboard;

// prototype 3 annotations
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

// // Define initial stocks for the portfolio
// const initialStocks = [
//   { shares: 10, entryPrice: 50 },  // Example: 10 shares bought at $50 each
//   { shares: 5, entryPrice: 75 },   // Example: 5 shares bought at $75 each
// ];

// const Dashboard = () => {
//   const { user } = useUser();
//   const [stockData, setStockData] = useState(initialStockData);
//   const [balance, setBalance] = useState(10000); // User's starting balance
//   const [portfolio, setPortfolio] = useState<{ shares: number; entryPrice: number }[]>(initialStocks); // Initialize with stocks
//   const [currentStockPrice, setCurrentStockPrice] = useState(stockData.datasets[0].data.slice(-1)[0]); // Latest stock price
//   const [trendProgressed, setTrendProgressed] = useState(false); // Track if trend is progressed
//   const [lastAction, setLastAction] = useState<'buy' | 'sell' | null>(null); // Track last action
//   const [popupMessage, setPopupMessage] = useState<string | null>(null); // Popup message

//   useEffect(() => {
//     setCurrentStockPrice(stockData.datasets[0].data.slice(-1)[0]);
//   }, [stockData]);

//   const updateStockData = () => {
//     const newStockPrices = [65, 59, 80, 60, 50, 40, 30, 20, 15, 10, 5, 2]; // V downtrend data
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
//     setTrendProgressed(true); // Mark trend as progressed
//     setPopupMessage(null); // Clear popup message after progressing
//   };

//   const replaySimulation = () => {
//     setStockData(initialStockData);
//     setPortfolio(initialStocks); // Reset portfolio with initial stocks
//     setBalance(10000); // Reset the balance to the initial state
//     setTrendProgressed(false); // Reset trend progress
//     setPopupMessage(null); // Clear popup message
//   };

//   const buyStock = (numShares: number) => {
//     const totalCost = currentStockPrice * numShares;

//     if (balance >= totalCost) {
//       setBalance(balance - totalCost);
//       setPortfolio([...portfolio, { shares: numShares, entryPrice: currentStockPrice }]);
//       setLastAction('buy'); // Track last action
//     } else {
//       setPopupMessage('Insufficient balance to buy stocks.');
//     }
//   };

//   const sellStock = (numShares: number) => {
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
//     setLastAction('sell'); // Track last action
//   };

//   const calculatePortfolioValue = () => {
//     return portfolio.reduce((total, item) => total + item.shares * currentStockPrice, 0);
//   };

//   useEffect(() => {
//     if (trendProgressed) {
//       if (lastAction === 'buy') {
//         setPopupMessage('Wrong! You bought stock before progressing the trend.');
//       } else if (lastAction === 'sell') {
//         setPopupMessage('Correct! You sold stock after progressing the trend.');
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
//         <Button className="mt-4" onClick={updateStockData}>Progress Stock Trend</Button>
//         <Button className="mt-4 ml-2" onClick={replaySimulation}>Replay Simulation</Button>
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
//         >
//           Buy Stock
//         </Button>
//         <Button
//           className="mt-4"
//           onClick={() => {
//             const numShares = parseInt((document.getElementById("numShares") as HTMLInputElement).value);
//             if (numShares > 0) sellStock(numShares);
//           }}
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

// prototype 3.1 final
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
        setPopupMessage('Wrong! You bought stock before (the dip) "progressing the trend".');
      } else if (lastAction === 'sell') {
        setPopupMessage('Correct! You sold stock before (the dip) "progressing the trend".');
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
      <div className="mt-6">
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
      <div className="mt-6">
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
        <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
