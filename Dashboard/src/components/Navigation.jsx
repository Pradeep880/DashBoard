// import React from "react";
import "./Navigation.css"
const Navigation = () => {
    return (
      <div className="navigation-menu bg-blue-50 p-4 w-full md:w-64">
        <ul className="space-y-4">
          <li className="text-blue-600 font-semibold">Dashboard</li>
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">My Cases</li>
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Activities</li>
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Calendar</li>
          <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Open a Dispute</li>
        </ul>
      </div>
    );
  };
  
 
export default Navigation;