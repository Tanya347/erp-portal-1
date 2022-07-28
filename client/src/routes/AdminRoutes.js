import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { userColumns, taskColumns, updateColumns } from "../datatablesource";
import { userInputs, taskInputs, updateInputs } from "../formSource"

//admin pages
import AdminHome from "../admin/pages/home/Home";
import AdminLogin from "../admin/pages/login/Login"
import List from "../pages/list/List"
import AdminSingle from "../admin/pages/single/AdminSingle";
import NewUser from "../admin/pages/user/NewUser";
import NewTask from "../admin/pages/task/NewTask";
import NewUpdate from "../admin/pages/update/NewUpdate"
import EditTask from '../admin/pages/task/EditTask';
import EditUpdate from '../admin/pages/update/EditUpdate';
import EditUser from '../admin/pages/user/EditUser';

function AdminRoutes() {
    const { user } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {

        if (user && user.username === "csd-admin")
            return children;
        else
            return <Navigate to="/adminLogin" />
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
                        <List column={userColumns} name="User" type="Admin" />
                    </RequireAuth>
                } />

                {/* single page for user */}
                <Route path="/admin/users/:userId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />

                {/* edit page for user */}
                <Route path="/admin/users/:userId/edit" element={
                    <RequireAuth>
                        <EditUser title="Update User" />
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
                        <List column={taskColumns} name="Task" type="Admin" />
                    </RequireAuth>
                } />

                {/* single page for task */}
                <Route path="/admin/tasks/:taskId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />

                {/* edit page for tasks */}
                <Route path="/admin/tasks/:taskId/edit" element={
                    <RequireAuth>
                        <EditTask title="Update Task" />
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
                        <List column={updateColumns} name="Update" type="Admin" />
                    </RequireAuth>
                } />

                {/* single page for task */}
                <Route path="/admin/updates/:updateId" element={
                    <RequireAuth>
                        <AdminSingle />
                    </RequireAuth>
                } />

                {/* edit task for update */}
                <Route path="/admin/updates/:updateId/edit" element={
                    <RequireAuth>
                        <EditUpdate title="Edit Updates" />
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
                        <List column={updateColumns} name="Event" type="Admin" />
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