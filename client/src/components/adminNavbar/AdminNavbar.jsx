import "./adminNavbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import NavSidebar from "../NavSidebar/NavSidebar";
import { motion } from "framer-motion";


const AdminNavbar = () => {
  const { Dispatch } = useContext(DarkModeContext);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="AdminNavbar">
      {openSidebar && <NavSidebar setOpen={setOpenSidebar} />}
      <div className="wrapper">

        <div className="items">

          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => Dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="item" onClick={() => setOpenSidebar(true)}>
            <ListOutlinedIcon className="icon" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
