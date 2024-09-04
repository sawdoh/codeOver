"use client"; // Ensure this is present if using Client Components

import React, { useState } from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { StockChart } from '@/components/ui/StockChart'; // Correct relative path

// Initial mock data for the stock graph
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

const Dashboard = () => {
  const { user } = useUser();
  const [stockData, setStockData] = useState(initialStockData);

  // Function to update stock data dynamically
  const updateStockData = () => {
    setStockData({
      labels: ['August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Stock Price',
          data: [70, 65, 90, 85, 60],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
        },
      ],
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user?.firstName || 'User'}!</p>
      <SignOutButton >
        <Button variant={'inverted'}>Sign Out</Button>
      </SignOutButton>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Stock Graph</h2>
        <StockChart data={stockData} />
        <Button className="mt-4" onClick={updateStockData}>Update Stock Data</Button>
      </div>
    </div>
  );
};

export default Dashboard;
