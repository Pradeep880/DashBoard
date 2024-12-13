
import { FaTachometerAlt, FaBriefcase, FaHeartbeat, FaCalendarAlt, FaFileAlt, FaGavel } from 'react-icons/fa';
import './Navigation.css';
import { RiDashboard3Line } from "react-icons/ri";
import { BsActivity } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import Rise from './rise.png'
function Navigation() {
  return (
    <div className="navigation-menu">
      <div className="logo">
        <img src="/path-to-logo" alt="Jur Logo" /> {/* Replace with actual logo path */}
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
          <FaCalendarAlt className="nav-icon" />
          <span>Calendar</span>
        </li>
        <li>
          <FaFileAlt className="nav-icon" />
          <span>Files</span>
        </li>
        <li>
          <FaGavel className="nav-icon" />
          <span>Open a Dispute</span>
        </li>
      </ul>
      <div >
        <img src={Rise} alt="Promo" />
      </div>
    </div>
  );
}

export default Navigation;

  
