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
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Sidebar = () => {
  const { Dispatch } = useContext(DarkModeContext);
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
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>

          {/* Takes you to list of all registered users */}
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          {/* Takes you to list of all tasks created by admin */}
          <Link to="/admin/tasks" style={{ textDecoration: "none" }}>
            <li>
              <TaskIcon className="icon" />
              <span>Tasks</span>
            </li>
          </Link>

          {/* Takes you to list of all tasks created by admin */}
          <Link to="/admin/updates" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsIcon className="icon" />
              <span>Updates</span>
            </li>
          </Link>

          {/* Takes you to list of all tasks created by teams */}
          <Link to="/admin/events" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <span>Events</span>
            </li>
          </Link>

          <p className="title">CREATE</p>
          <Link to="/admin/users/new" style={{ textDecoration: "none" }}>
            <li>
              <PersonAddIcon className="icon" />
              <span>User</span>
            </li>
          </Link>

          <Link to="/admin/tasks/new" style={{ textDecoration: "none" }}>
            <li>
              <AddTaskIcon className="icon" />
              <span>Tasks</span>
            </li>
          </Link>

          <Link to="/admin/updates/new" style={{ textDecoration: "none" }}>
            <li>
              <NotificationAddIcon className="icon" />
              <span>Updates</span>
            </li>
          </Link>

          {/* <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}


          <p className="title">USER</p>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <li>
            <ExitToAppIcon className="icon" />
            <span onClick={handleClick}>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => Dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => Dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
