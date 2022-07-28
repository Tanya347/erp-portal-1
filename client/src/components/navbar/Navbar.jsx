import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { Dispatch } = useContext(DarkModeContext);
  const { data } = useFetch(`/updates`)
  const { user } = useContext(AuthContext)

  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }

  const handleNotif = () => {
    const btn = document.getElementById("notif-menu");
    if (btn.style.display === "none")
      btn.style.display = "block"
    else
      btn.style.display = "none"
  }

  const handleMenu = () => {
    const btn = document.getElementById("menu");
    if (btn.style.display === "none")
      btn.style.display = "block"
    else
      btn.style.display = "none"
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
          <ul id="notif-menu">
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
          </ul>

          {/* Menu */}

          <div className="item" onClick={handleMenu}>
            <ListOutlinedIcon className="icon" />
          </div>
          <ul id="menu">
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
          </ul>

          {/* Profile */}

          <div className="item">
            {/* <Link to={`users/${user._id}`}> */}
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
              onClick={() => navigate(`/users/${user._id}`)}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
