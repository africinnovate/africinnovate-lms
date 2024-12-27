import React from 'react';

interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon }) => {
  return (
    <div className="bg-white shadow rounded p-6 flex items-center gap-4">
      <div className="text-blue-900">{icon}</div>
      <div>
        <h2 className="text-2xl font-bold">{value}</h2>
        <p>{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default StatCard;
