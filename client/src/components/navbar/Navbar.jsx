import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import NavSidebar from "../navSidebar/NavSidebar"

const Navbar = () => {
  const { Dispatch } = useContext(DarkModeContext);
  const { data } = useFetch(`/updates`)
  const { user } = useContext(AuthContext)
  const [openNotif, setOpenNotif] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const navigate = useNavigate();

  const handleNotif = () => {
    setOpenNotif(!openNotif)
  }

  useEffect(() => {
    data.filter((d) => d.status === "Old")
  }, [data])

  return (
    <div className="navbar">
      {openSidebar && <NavSidebar setOpen={setOpenSidebar} />}

      <div className="wrapper">

        <Link to="/">
          <p className=""><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} height="60px" alt="" /></p>
        </Link>

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
          {openNotif && <ul id="notif-menu">
            {data.map((item) => (
              <li>
                <h3>{item.title}</h3>
                <p>{item.desc.slice(0, 25)} ...</p>
              </li>
            ))}
            <Link to="/updates" style={{ textDecoration: "none" }}>
              <li id="more">
                View all new updates
              </li>
            </Link>
          </ul>}

          {/* Menu */}

          <div className="item" onClick={() => setOpenSidebar(!openSidebar)}>
            <ListOutlinedIcon className="icon" />
          </div>

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
