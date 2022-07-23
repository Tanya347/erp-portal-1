import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";

const Navbar = () => {
  const { Dispatch } = useContext(DarkModeContext);
  const { data } = useFetch(`/updates`)

  const handleNotif = () => {
    const btn = document.getElementById("notif-menu");
    if (btn.style.display === "none")
      btn.style.display = "block"
    else
      btn.style.display = "none"
  }

  return (
    <div className="AdminNavbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">

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
            <li id="more">
              View all new updates
            </li>
          </ul>

          {/* Menu */}

          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          {/* Profile */}

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
