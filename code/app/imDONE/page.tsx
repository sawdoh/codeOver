"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from '@/components/ui/button';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Page = () => {
  const [chartData, setChartData] = useState(null);

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
          const labels = Object.keys(data).reverse();
          const prices = labels.map(label => data[label]['1. open']);

          setChartData({
            labels,
            datasets: [
              {
                label: 'IBM Stock Price',
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
              }
            ]
          });
        }
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  return (
    <div>
      <h1>Data Fetching Page</h1>
      <p>Check the console for data fetching results.</p>
      {chartData && <Line data={chartData} />}
      <Button>Click Me</Button>
    </div>
  );
};

export default Page;