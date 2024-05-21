import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const orderData = [
    { name: 'Floral Shirt', statusClass: 'inProgress' },
    { name: 'Jean Short', statusClass: 'pending' },
    { name: 'Vintage Shirt', statusClass: 'delivered' },
    { name: 'Black Jacket', statusClass: 'return' },
    { name: 'Blue Shirt', statusClass: 'inProgress' },
    { name: 'Jean Jacket', statusClass: 'pending' },
    { name: 'Milk Dress', statusClass: 'delivered' },
    { name: 'Black Hoodie', statusClass: 'return' },
  ];

  const statusCounts = orderData.reduce(
    (acc, order) => {
      acc[order.statusClass]++;
      return acc;
    },
    { inProgress: 0, pending: 0, delivered: 0, return: 0 }
  );

  const data = {
    labels: ['In Progress', 'Pending', 'Delivered', 'Returned'],
    datasets: [
      {
        data: [
          statusCounts.inProgress,
          statusCounts.pending,
          statusCounts.delivered,
          statusCounts.return,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
