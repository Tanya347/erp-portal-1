import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TaskIcon from '@mui/icons-material/Task';
import EventIcon from '@mui/icons-material/Event';
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import AddTaskIcon from '@mui/icons-material/AddTask';
// import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext)

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">ADMIN</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>

          {/* Takes you to list of all tasks created by admin */}

          <li>
            <TaskIcon className="icon" />
            <span>Tasks</span>
          </li>

          {/* <p className="title">EVALUATION</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Assessment</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>  */}


          <p className="title">USER</p>

          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleClick}>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => Dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => Dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
