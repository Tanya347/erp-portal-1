import { List } from '@mui/material';
import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import { taskColumns } from './main/datatablesource';

// admin pages
import Home from "./main/pages/home/Home";
import Login from "./main/pages/login/Login"
import Single from "./main/pages/single/Single"

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
                <Route path="/">

                    {/* dashboard of main */}
                    <Route index element={
                        <RequireAuth>
                            <Home />
                        </RequireAuth>
                    } />

                    <Route path="/:id" element={<Single />} />
                    <Route path="/tasks" element={< List column={taskColumns} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes