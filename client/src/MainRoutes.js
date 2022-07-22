import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "./context/AuthContext";
import { userColumns, taskColumns, updateColumns } from "./main/datatablesource";
import { userInputs, taskInputs, updateInputs } from "./main/formSource"

//admin pages
import Home from "./main/pages/home/Home";
import Login from "./main/pages/login/Login"
import List from "./main/pages/list/List"
import Single from "./main/pages/single/Single";

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
                                <Single />
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
                                <Single />
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
                                <Single />
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
                                <Single />
                            </RequireAuth>
                        } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoutes