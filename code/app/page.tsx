
"use client"; 
import Image from "next/image";
import './template/style.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      // Redirect to the dashboard if the user is authenticated
      router.push('/dashboard');
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    // Optionally, display a loading indicator while checking authentication
    return <p>Loading...</p>;
  }

  return (
    <div className="parent-container">
      <div className = "hero">
        <div className="image-container">
          <img src="https://anderson-review.ucla.edu/wp-content/uploads/2024/02/AR-thumb-etf-capex.png" alt="Stocks going down"/>
        </div>
        <div id='welcome'>
        <p className="npt">
          Welcome to NewsPaperTrade
        </p>
        <h3 className="word">
          Become financially illiterate. Beat the markets with automated AI-driven trading strategies. Become a quant legend and deploy your strategy for millions of DeFi users.
        </h3>
        {!user ? (
          <SignInButton mode="modal">
            <Button variant='inverted' id="buttoner">
              Start Now
            </Button>
          </SignInButton>
        ) : (
          <SignOutButton >
            <Button variant='inverted'>
              Sign Out
              <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
          </SignOutButton>
        )}
        </div>
      </div>
    </div>
  );
}

