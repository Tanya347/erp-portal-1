import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import csd_logo from "../../pages/login/CSD_logo.png";
import NavSidebar from "../NavSidebar/NavSidebar"
import { HiMenu } from "react-icons/hi"
import { FiMoon } from "react-icons/fi"
import { CgBell } from "react-icons/cg"

const Navbar = () => {
  const { Dispatch, darkMode } = useContext(DarkModeContext);
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
    <>
      <div className="navbar">
        {openSidebar && <NavSidebar setOpen={setOpenSidebar} />}

        <div className="wrapper">

          <Link to="/">
            {darkMode ? <p className="brand"><img src={process.env.PUBLIC_URL + "/Assets/brand2.png"} height="60px" alt="" /></p> : <p className="brand"><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} height="60px" alt="" /></p>}
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

      {/* Start: Mobile Screen */}
      <div className="lg:hidden border-b-2">
        {openSidebar && <NavSidebar setOpen={setOpenSidebar} />}
        <div className="flex items-center justify-between">
          <div className='my-3 mx-4 w-16 h-14'>
            <img
              src={csd_logo}
              alt="csd_logo"
              className='w-full h-full'
            />
          </div>

          <div className="flex items-center gap-3">

            {/* Dark Mode */}
            <div className="hidden md:flex lg:hidden item">
              <DarkModeOutlinedIcon
                className="icon"
                onClick={() => Dispatch({ type: "TOGGLE" })}
              />
            </div>

            {/* Notifications */}

            <div className="item flex items-center text-2xl" id="notif">
              <CgBell className="icon" onClick={handleNotif} />
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
              <HiMenu className="text-3xl" />
            </div>

            {/* Profile */}
            <div className="w-8 mr-4 ml-2">
              <img
                src={user.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt=""
                className="w-full rounded-full"
                onClick={() => navigate(`/users/${user._id}`)}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Start: Mobile Screen */}
    </>
  );
};

export default Navbar;