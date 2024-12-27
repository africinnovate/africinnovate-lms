import React from 'react';

function ChartSection () {
  return (
    <div className="bg-white shadow rounded p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Finance</h2>
        <div className="flex gap-4">
          <button className="bg-gray-200 px-4 py-2 rounded">Monthly</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Yearly</button>
        </div>
      </div>
      <div>
        <p>Chart goes here</p>
      </div>
    </div>
  );
};

export default ChartSection;
