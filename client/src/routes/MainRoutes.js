import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { taskColumns, updateColumns } from '../main/datatablesource';

// admin pages
import Home from "../main/pages/home/Home";
import Login from "../main/pages/login/Login"
import Single from "../main/pages/single/Single"
import List from '../main/pages/list/List';
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

                    {/* profile page */}
                    <Route path=":id" element={
                        <RequireAuth>
                            <Single />
                        </RequireAuth>
                    } />

                    {/* tasks page */}
                    <Route path="tasks" element={
                        <RequireAuth>
                            < List column={taskColumns} />
                        </RequireAuth>
                    } />

                    {/* updates page */}
                    <Route path="updates" element={
                        <RequireAuth>
                            < List column={updateColumns} />
                        </RequireAuth>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes