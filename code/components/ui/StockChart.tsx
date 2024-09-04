// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

// // Register Chart.js components
// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// interface StockChartProps {
//   data: {
//     labels: string[];
//     datasets: {
//       label: string;
//       data: number[];
//       borderColor: string;
//       backgroundColor: string;
//     }[];
//   };
// }

// const StockChart: React.FC<StockChartProps> = ({ data }) => {
//   return <Line data={data} />;
// };

// export { StockChart };





// prototype 4.0 with annotations entry exit point

// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import annotationPlugin from 'chartjs-plugin-annotation';

// // Register Chart.js components and annotation plugin
// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend, annotationPlugin);

// interface StockChartProps {
//   data: {
//     labels: string[];
//     datasets: {
//       label: string;
//       data: number[];
//       borderColor: string;
//       backgroundColor: string;
//     }[];
//   };
//   entryPoint: number | null;
//   exitPoint: number | null;
// }

// const StockChart: React.FC<StockChartProps> = ({ data, entryPoint, exitPoint }) => {
//   const options = {
//     responsive: true,
//     plugins: {
//       annotation: {
//         annotations: {
//           entry: entryPoint !== null ? {
//             type: 'line',
//             xMin: entryPoint,
//             xMax: entryPoint,
//             borderColor: 'rgba(0, 255, 0, 1)',
//             borderWidth: 2,
//             label: {
//               content: 'Entry Point',
//               enabled: true,
//               position: 'top',
//               backgroundColor: 'rgba(0, 255, 0, 0.8)',
//               color: '#fff',
//             },
//           } : undefined,
//           exit: exitPoint !== null ? {
//             type: 'line',
//             xMin: exitPoint,
//             xMax: exitPoint,
//             borderColor: 'rgba(255, 0, 0, 1)',
//             borderWidth: 2,
//             label: {
//               content: 'Exit Point',
//               enabled: true,
//               position: 'top',
//               backgroundColor: 'rgba(255, 0, 0, 0.8)',
//               color: '#fff',
//             },
//           } : undefined,
//         },
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Month',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Price',
//         },
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };

// export { StockChart };






// working ---

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface StockChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '8px' }}>
      <Line
        data={data}
        options={{
          scales: {
            x: {
              ticks: { color: 'black' },
            },
            y: {
              ticks: { color: 'black' },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: { labels: { color: 'black' } },
          },
        }}
      />
    </div>
  );
};

export { StockChart };


// prototype 3.0 with annotations

