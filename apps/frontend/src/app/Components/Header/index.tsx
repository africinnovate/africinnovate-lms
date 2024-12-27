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
          <i className="fas fa-bell text-gray-700">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" fill="#838383" fill-opacity="0.06" />
              <path d="M27.34 22.49L26.34 20.83C26.13 20.46 25.94 19.76 25.94 19.35V16.82C25.94 14.47 24.56 12.44 22.57 11.49C22.05 10.57 21.09 10 19.99 10C18.9 10 17.92 10.59 17.4 11.52C15.45 12.49 14.1 14.5 14.1 16.82V19.35C14.1 19.76 13.91 20.46 13.7 20.82L12.69 22.49C12.29 23.16 12.2 23.9 12.45 24.58C12.69 25.25 13.26 25.77 14 26.02C15.94 26.68 17.98 27 20.02 27C22.06 27 24.1 26.68 26.04 26.03C26.74 25.8 27.28 25.27 27.54 24.58C27.8 23.89 27.73 23.13 27.34 22.49Z" fill="#032459" />
              <path d="M22.83 28.01C22.41 29.17 21.3 30 20 30C19.21 30 18.43 29.68 17.88 29.11C17.56 28.81 17.32 28.41 17.18 28C17.31 28.02 17.44 28.03 17.58 28.05C17.81 28.08 18.05 28.11 18.29 28.13C18.86 28.18 19.44 28.21 20.02 28.21C20.59 28.21 21.16 28.18 21.72 28.13C21.93 28.11 22.14 28.1 22.34 28.07C22.5 28.05 22.66 28.03 22.83 28.01Z" fill="#032459" />
            </svg>

          </i>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={profilepng}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className=' text-black'>Chukwuke Chisom</p>
            <p className=' text-black'>Co-founder</p>
          </div>

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.92 8.18005H11.69H6.07999C5.11999 8.18005 4.63999 9.34005 5.31999 10.0201L10.5 15.2001C11.33 16.0301 12.68 16.0301 13.51 15.2001L15.48 13.2301L18.69 10.0201C19.36 9.34005 18.88 8.18005 17.92 8.18005Z" fill="#838383" />
          </svg>

        </div>
      </div>
    </div>
  );
};

export default Header;
