import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-white flex justify-between items-center px-6 py-4 shadow">
      <input
        type="text"
        placeholder="Search"
        className="border rounded py-2 px-4 w-1/3"
      />
      <div className="flex items-center gap-6">
        <div className="relative">
          <span className="absolute right-0 top-0 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">22</span>
          <i className="fas fa-bell text-gray-700"></i>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <p>Chukwuke Chisom</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
