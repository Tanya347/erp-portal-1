import React from 'react'
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TaskIcon from '@mui/icons-material/Task';
import EventIcon from '@mui/icons-material/Event';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CloseIcon from '@mui/icons-material/Close';

import "./adminSidebar.scss"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";


const AdminSidebar = ({ setOpen }) => {

    const { Dispatch } = useContext(DarkModeContext);
    const { dispatch } = useContext(AuthContext)

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='navSidebarContainer'>
            <motion.div animate={{ width: "200px" }} className="sidebar">
                <ul>
                    <li id='menu'>
                        <h2 >ADMIN MENU</h2>
                        <CloseIcon className='icon' onClick={() => setOpen(false)} />
                    </li>
                    <p className="title">Main</p>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">Lists</p>

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

                    <p className="title">Create</p>
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


                    <p className="title">User</p>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={handleClick}>Logout</span>
                    </li>
                    <p className="title">Theme</p>
                    <div className="theme">
                        <div
                            className="colorOption"
                            onClick={() => Dispatch({ type: "LIGHT" })}
                        ></div>
                        <div
                            className="colorOption"
                            onClick={() => Dispatch({ type: "DARK" })}
                        ></div>
                    </div>
                </ul>
            </motion.div >


        </div >
    )
}

export default AdminSidebar