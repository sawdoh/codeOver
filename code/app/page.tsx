
"use client"; 
import Link from 'next/link';
import { useRef } from 'react';
import Image from "next/image";
import './template/style.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignInButton, SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const simulationRef = useRef<HTMLDivElement>(null);

<link rel="icon" href="https://i.imgflip.com/8h26xs.png"></link>

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

  const handleScrollToSimulation = () => {
    simulationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="parent-container">
      <div className = "hero">
        <div className="image-container">
          <img src="https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I=" alt="Stocks going down"  id='picture' style={{ width: '760px', height: '540px' }} />
        </div>
          <div id='welcome'>
            <p className="npt">
              Welcome to NewsPaperTrade
            </p>
            <h3 className="word">
              Become financially illiterate. Beat the markets with automated AI-driven trading strategies. Become a quant legend and deploy your strategy for millions of DeFi users.
            </h3>
            <Link href="/learning_hub">
              <Button variant='inverted' id="buttoner">
                Start Now
              </Button>
            </Link>
            <button id='buttie' onClick={handleScrollToSimulation}>
              Try Simulator
            </button>
        </div>
      </div>
      <div className="simulations" ref={simulationRef}>
        <div>
          <h2 className="head">Simulation Strategies</h2>
          <p className="sub">Simulation strategies have been live for 142 days.</p>
          <Card />
        </div>
      </div>
    </div>
  );
}

