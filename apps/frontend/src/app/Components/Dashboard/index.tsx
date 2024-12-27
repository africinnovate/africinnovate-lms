import React from 'react';
import Sidebar from '../Sidebar/index';
import Header from '../Header/index';
import StatCard from '../Card/index';
import ChartSection from '../ChartSection/index';

function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Header />
        <div className="p-6 text-black">
          <h1 className="text-xl font-bold mb-4">Dashboard</h1>
          <p className="mb-6">Hi Chisom Chukwuke, this is your dashboard</p>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Total Students"
              value={122}
              description="16 students more than last month"
              icon={<i className="fas fa-users"></i>}
            />
            <StatCard
              title="Total Teachers"
              value={24}
              description="4 teachers less than last month"
              icon={<i className="fas fa-user-graduate"></i>}
            />
            <StatCard
              title="Upcoming Events"
              value={3}
              description="16 events completed"
              icon={<i className="fas fa-calendar-alt"></i>}
            />
          </div>
          <ChartSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
