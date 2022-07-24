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
                <Route path="/admin">

                    {/* dashboard of admin */}
                    <Route index element={
                        <RequireAuth>
                            <AdminHome />
                        </RequireAuth>
                    } />

                    {/* routes for users */}
                    <Route path="users">

                        {/* list of users */}
                        <Route index element={
                            <RequireAuth>
                                <AdminList column={userColumns} name="User" />
                            </RequireAuth>
                        } />

                        {/* single page for user */}
                        <Route path=":userId" element={
                            <RequireAuth>
                                <AdminSingle />
                            </RequireAuth>
                        } />

                        {/* create user page */}
                        <Route
                            path="new" element={
                                <RequireAuth>
                                    <NewUser inputs={userInputs} title="Add New User" />
                                </RequireAuth>
                            } />

                    </Route>

                    {/* routes for tasks */}
                    <Route path="tasks">

                        {/* list of tasks */}
                        <Route index element={
                            <RequireAuth>
                                <AdminList column={taskColumns} name="Task" />
                            </RequireAuth>
                        } />

                        {/* single page for task */}
                        <Route path=":taskId" element={
                            <RequireAuth>
                                <AdminSingle />
                            </RequireAuth>
                        } />

                        {/* create task page */}
                        <Route
                            path="new" element={
                                <RequireAuth>
                                    <NewTask inputs={taskInputs} title="Add New Task" />
                                </RequireAuth>
                            } />
                    </Route>

                    {/* routes for updates */}
                    <Route path="updates">

                        {/* list of updates */}
                        <Route index element={
                            <RequireAuth>
                                <AdminList column={updateColumns} name="Update" />
                            </RequireAuth>
                        } />

                        {/* single page for task */}
                        <Route path=":updateId" element={
                            <RequireAuth>
                                <AdminSingle />
                            </RequireAuth>
                        } />

                        {/* create task page */}
                        <Route
                            path="new" element={
                                <RequireAuth>
                                    <NewUpdate inputs={updateInputs} title="Add New Update" />
                                </RequireAuth>
                            }
                        />
                    </Route>

                    {/* routes for events */}
                    <Route path="events">

                        {/* list of events */}
                        <Route index element={
                            <RequireAuth>
                                <AdminList column={updateColumns} name="Event" />
                            </RequireAuth>
                        } />

                        {/* single page for users */}
                        <Route path=":eventId" element={
                            <RequireAuth>
                                <AdminSingle />
                            </RequireAuth>
                        } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes