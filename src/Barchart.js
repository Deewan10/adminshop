import React from 'react';

function BarChart({ values }) {
  const max = Math.max(...values);

  return (
    <div className="bar-chart">
      {values.map((value, index) => (
        <div key={index} className="bar" style={{ height: `${(value / max) * 100}%` }}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default BarChart;
