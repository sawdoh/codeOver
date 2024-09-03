"use client"; // Ensure this is present if using Client Components

import React from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {user?.firstName || 'User'}!</p>
      <SignOutButton >
        <Button>Sign Out</Button>
      </SignOutButton>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default Dashboard;
