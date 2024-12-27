import React from 'react';
import Image from 'next/image';
import profilepng from '../../../assets/profile .jpeg'

// interface HeaderProps {}

function Header() {
  return (
    <div className="bg-white flex justify-between items-center px-6 py-4 shadow">
        <div className="relative flex items-center w-5/6">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-3"
  >
    <path
      d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
      stroke="#838383"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
      stroke="#838383"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  <input
    type="text"
    placeholder="Search"
    className="border rounded py-2 pl-10 pr-4 w-[440px] text-black bg-[#959DA533]"
  />
</div>

      <div className="flex items-center gap-6 w-[330px]">
        <div className="relative">
          <span className="absolute right-0 top-0 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">22</span>
          <i className="fas fa-bell text-gray-700"></i>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={profilepng}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <p className=' text-black'>Chukwuke Chisom</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
