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
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z" fill="#032459" />
              <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.88 21.11C9.56 20.81 9.32 20.41 9.18 20C9.31 20.02 9.44 20.03 9.58 20.05C9.81 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="#032459" />
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
            <p className=' text-gray-500'>Co-Founder</p>
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
