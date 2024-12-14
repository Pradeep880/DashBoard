import { useState } from "react";
import './Dashboard.css';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul>
          <li>Dashboard</li>
          <li>My Cases</li>
          <li>Activities</li>
          <li>Calendar</li>
          <li>Files</li>
          <li>Open a Dispute</li>
        </ul>
      </div>

      <div className={`main-content ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <button 
          onClick={toggleSidebar} 
          className="md:hidden fixed top-4 left-4 z-50 bg-blue-500 text-white p-2 rounded"
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
