import React from 'react';

interface SidebarProps {}

function Sidebar(){
  return (
    <div className="bg-blue-900 text-white w-64 h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Africinnovate</h1>
      </div>
      <nav className="flex-grow">
        <ul>
          <li className="p-4 hover:bg-blue-700">Dashboard</li>
          <li className="p-4 hover:bg-blue-700">Students</li>
          <li className="p-4 hover:bg-blue-700">Staffs</li>
          <li className="p-4 hover:bg-blue-700">Events</li>
          <li className="p-4 hover:bg-blue-700">Finance</li>
          <li className="p-4 hover:bg-blue-700">Channels</li>
          <li className="p-4 hover:bg-blue-700">Notification</li>
        </ul>
      </nav>
      <div className="p-6">
        <p className="font-bold">Chukwuke Chisom</p>
        <p className="text-sm">Co-founder</p>
        <button className="mt-4 bg-blue-700 py-2 px-4 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
