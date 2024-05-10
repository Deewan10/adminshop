import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data = {
    labels: ['Floral Shirt', 'Jean Short', 'Vintage Shirt', 'Black Jacket', 'Blue Shirt', 'Jean Jacket', 'Milk Dress', 'Black Hoodie'],
    datasets: [
      {
        data: [429, 222, 209, 399, 429, 522, 79, 399],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9966',
          '#66CCCC',
          '#FF99CC'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9966',
          '#66CCCC',
          '#FF99CC'
        ]
      }
    ]
  };

  return (
    <div>
      <h2>Order Items</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
