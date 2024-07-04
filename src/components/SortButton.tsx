import React, { useState } from 'react';
import { IoFilterOutline } from 'react-icons/io5';

export default function SortButton({ handleFilterOptionClick }:any) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div className="relative group">
      <div 
        className={`flex border-2 h-12 items-center px-2 border-blue-500 bg-blue-500 text-white gap-2 rounded-md cursor-pointer group`}
        onMouseEnter={toggleDropdown} // Show dropdown on hover
      >
        <span>Sort</span> <IoFilterOutline />
      </div>
      {/* Conditional rendering based on dropdown state */}
      {isDropdownOpen && (
        <div className="absolute z-20 top-12 right-0 bg-white border border-gray-200 rounded-md py-1 w-max"
        onMouseLeave={toggleDropdown} 
        >
          <div
            className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              handleFilterOptionClick("a-z");
              toggleDropdown(); 
            }}
          >
            A-Z
          </div>
          <div
            className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              handleFilterOptionClick("reset");
              toggleDropdown(); 
            }}
          >
            Reset
          </div>
        </div>
      )}
    </div>
  );
}
