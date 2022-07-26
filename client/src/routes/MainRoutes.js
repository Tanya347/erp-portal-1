import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { taskColumns, updateColumns } from '../main/datatablesource';
import { eventInputs } from '../main/formSource';
// admin pages
import Home from "../main/pages/home/Home";
import Login from "../main/pages/login/Login"
import Single from "../main/pages/single/Single"
import List from '../main/pages/list/List';
import NewEvent from '../main/pages/newEvent/NewEvent';
function AdminRoutes() {
    const { user } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return user ? (children) : <Navigate to="/login" />
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* login page for main */}
                <Route path="/login" element={
                    <Login />
                } />

                {/* main routes */}

                {/* dashboard of main */}
                <Route path="/" element={
                    < RequireAuth >
                        <Home />
                    </RequireAuth>
                } />




                {/* profile page */}
                <Route path="/users/:id" element={
                    <RequireAuth>
                        <Single />
                    </RequireAuth>
                } />

                {/* tasks page */}
                <Route path="/tasks" element={
                    <RequireAuth>
                        < List column={taskColumns} />
                    </RequireAuth>
                } />

                {/* updates page */}
                <Route path="/updates" element={
                    <RequireAuth>
                        < List column={updateColumns} />
                    </RequireAuth>
                } />

                {/* create events page */}
                <Route path="/newEvent" element={
                    <RequireAuth>
                        <NewEvent inputs={eventInputs} title="Add New Event" />
                    </RequireAuth>
                } />
            </Routes >
        </BrowserRouter >
    )
}

export default AdminRoutes