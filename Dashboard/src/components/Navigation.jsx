import { useState, useEffect } from "react";
import './Navigation.css';
import { RiDashboard3Line } from "react-icons/ri";
import { BsActivity } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";
import { PiHandFistLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger icon
import Rise from './rise.png';
import Logo from './logo_rise.png';

function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar when switching from mobile to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="sidebar-toggle-container">
        <GiHamburgerMenu 
          onClick={toggleSidebar} 
          className="sidebar-toggle-icon"
        />
      </div>
      <div className={`navigation-menu ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={Logo} alt="Jur Logo" /> 
          <span>Jur</span>
        </div>
        <ul>
          <li>
            <RiDashboard3Line className="nav-icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <SlBriefcase className="nav-icon" />
            <span>My Cases</span>
          </li>
          <li>
            <BsActivity className="nav-icon" />
            <span>Activities</span>
          </li>
          <li>
            <IoCalendarOutline className="nav-icon" />
            <span>Calendar</span>
          </li>
          <li>
            <ImFilesEmpty className="nav-icon" />
            <span>Files</span>
          </li>
          <li>
            <PiHandFistLight className="nav-icon" />
            <span>Open a Dispute</span>
          </li>
        </ul>
        <div className="promo-section">
          <img src={Rise} alt="Promo" />
        </div>
      </div>
    </>
  );
}

export default Navigation;
