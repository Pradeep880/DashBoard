import './Navigation.css';
import { RiDashboard3Line } from "react-icons/ri";
import { BsActivity } from "react-icons/bs";
import { SlBriefcase } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";
import { PiHandFistLight } from "react-icons/pi";
import Rise from './rise.png';
import Logo from './logo_rise.png';
function Navigation() {
  return (
    <div className="navigation-menu">
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
      <div >
        <img src={Rise} alt="Promo" />
      </div>
    </div>
  );
}

export default Navigation;

  
