import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
  );

  export const LineChart = ({ views = [] }) => {
    const labels = getLastYearMonths();
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Yearly Views',
        },
      },
    };

    const data = {
        labels,
        datasets: [
          {
            label: 'Views',
            data: views,
            borderColor: 'rgba(107,70,193,0.5)',
            backgroundColor: '#6b46c1',
          },
        ],
      };
    
      return <Line options={options} data={data} />;
    };

    function getLastYearMonths() {
        const labels = [];
      
        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ];
      
        const currentMonth = new Date().getMonth();

        for (let i = currentMonth; i < months.length; i--) {
            const element = months[i];
            labels.unshift(element);
            if (i === 0) break;
          }
        
          for (let i = 11; i > currentMonth; i--) {
            if (i === currentMonth) break;
            const element = months[i];
            labels.unshift(element);
          }
          //   console.log(labels);
          return labels;
        }
        
        // getLastYearMonths();