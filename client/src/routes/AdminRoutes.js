import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { userColumns, taskColumns, updateColumns } from "../admin/datatablesource";
import { userInputs, taskInputs, updateInputs } from "../admin/formSource"

//admin pages
import AdminHome from "../admin/pages/home/Home";
import AdminLogin from "../admin/pages/login/Login"
import AdminList from "../admin/pages/list/List"
import AdminSingle from "../admin/pages/single/AdminSingle";
import NewUser from "../admin/pages/newUser/NewUser";
import NewTask from "../admin/pages/newTask/NewTask";
import NewUpdate from "../admin/pages/newUpdate/NewUpdate"

function AdminRoutes() {
    const { user } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return user ? (children) : <Navigate to="/adminLogin" />
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* login page for admin */}
                <Route path="/adminLogin" element={
                    <AdminLogin />
                } />

                {/* admin routes */}
                {/* dashboard of admin */}

                <Route path="/admin" element={
                    <RequireAuth>
                        <AdminHome />
                    </RequireAuth>
                } />


                {/* routes for users */}

                {/* list of users */}
                <Route path="/admin/users" element={
                    <RequireAuth>
                        <AdminList column={userColumns} name="User" />
                    </RequireAuth>
                } />

                {/* single page for user */}
                <Route path="/admin/users/:userId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />

                {/* create user page */}
                <Route path="/admin/users/new" element={
                    <RequireAuth>
                        <NewUser inputs={userInputs} title="Add New User" />
                    </RequireAuth>
                } />


                {/* routes for tasks */}

                {/* list of tasks */}
                <Route path="/admin/tasks" element={
                    <RequireAuth>
                        <AdminList column={taskColumns} name="Task" />
                    </RequireAuth>
                } />

                {/* single page for task */}
                <Route path="/admin/tasks/:taskId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />


                {/* create task page */}
                <Route path="/admin/tasks/new" element={
                    <RequireAuth>
                        <NewTask inputs={taskInputs} title="Add New Task" />
                    </RequireAuth>
                } />


                {/* routes for updates */}
                <Route path="/admin/updates" element={
                    <RequireAuth>
                        <AdminList column={updateColumns} name="Update" />
                    </RequireAuth>
                } />

                {/* single page for task */}
                <Route path="/admin/updates/:updateId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />

                {/* create task page */}
                <Route
                    path="/admin/updates/new" element={
                        <RequireAuth>
                            <NewUpdate inputs={updateInputs} title="Add New Update" />
                        </RequireAuth>
                    }
                />

                {/* routes for events */}

                {/* list of events */}
                <Route path="/admin/events" element={
                    <RequireAuth>
                        <AdminList column={updateColumns} name="Event" />
                    </RequireAuth>
                } />

                {/* single page for users */}
                <Route path="/admin/events/:eventId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />
            </Routes>
        </BrowserRouter >
    )
}

export default AdminRoutes