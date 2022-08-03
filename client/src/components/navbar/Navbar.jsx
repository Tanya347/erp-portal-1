import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import NavSidebar from "../NavSidebar/NavSidebar";

const Navbar = () => {
  const { Dispatch } = useContext(DarkModeContext);
  const { data } = useFetch(`/updates`)
  const { user } = useContext(AuthContext)
  const { dispatch } = useContext(AuthContext)
  const [openNotif, setOpenNotif] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  const handleNotif = () => {
    setOpenNotif(!openNotif)
  }

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className="AdminNavbar">
      <div className="wrapper">

        <div className="items">

          <div className="item">
            <h1>CSD-IGDTUW</h1>
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => Dispatch({ type: "TOGGLE" })}
            />
          </div>

          {/* Notifications */}

          <div className="item" id="notif">
            <NotificationsNoneOutlinedIcon className="icon" onClick={handleNotif} />
            <div className="counter">{data.length}</div>
          </div>
          {openNotif && <ul id="notif-menu">
            {data.map((item) => (
              <li>
                <h3>{item.title}</h3>
                <p>{item.desc.slice(0, 25)}</p>
              </li>
            ))}
            <Link to="/updates" style={{ textDecoration: "none" }}>
              <li id="more">
                View all new updates
              </li>
            </Link>
          </ul>}

          {/* Menu */}

          <div className="item" onClick={handleMenu}>
            <ListOutlinedIcon className="icon" />
          </div>
          {openMenu && <ul id="menu">
            <Link to="/" style={{ textDecoration: "none" }}>
              <li><h3>Dashboard</h3></li>
            </Link>
            <Link to="/tasks" style={{ textDecoration: "none" }}>
              <li><h3>Tasks</h3></li>
            </Link>
            <Link to="/newEvent" style={{ textDecoration: "none" }}>
              {user.subteam === "Technical Team" && <li><h3>Create Event</h3></li>}
            </Link>
            <li onClick={handleClick}><h3>Logout</h3></li>
          </ul>}

          {/* Profile */}

          <div className="item">
            <img
              src={user.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
              alt=""
              className="avatar"
              onClick={() => navigate(`/users/${user._id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
