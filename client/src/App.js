import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

//admin pages
import AdminHome from "./admin/pages/home/Home";
import AdminLogin from "./admin/pages/login/Login"
import AdminList from "./admin/pages/list/List"
import Single from "./admin/pages/single/Single";
import NewUser from "./admin/pages/newUser/NewUser";
import NewTask from "./admin/pages/newTask/NewTask";
import NewUpdate from "./admin/pages/newUpdate/NewUpdate"

import "./admin/style/dark.scss";
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext";
import { userColumns, taskColumns, updateColumns } from "./admin/datatablesource";
import { userInputs, taskInputs, updateInputs } from "./admin/formSource"
import { AuthContext } from "./context/AuthContext";


function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return user ? (children) : <Navigate to="/adminLogin" />
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>

          {/* login page */}
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

            <Route path="tasks">
              <Route index element={
                <RequireAuth>
                  <AdminList column={taskColumns} name="Task" />
                </RequireAuth>
              } />

              <Route path=":taskId" element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />

              <Route
                path="new" element={
                  <RequireAuth>
                    <NewTask inputs={taskInputs} title="Add New Task" />
                  </RequireAuth>
                } />
            </Route>

            <Route path="updates">
              <Route index element={
                <RequireAuth>
                  <AdminList column={updateColumns} name="Update" />
                </RequireAuth>
              } />

              <Route path=":updateId" element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />

              <Route
                path="new" element={
                  <RequireAuth>
                    <NewUpdate inputs={updateInputs} title="Add New Update" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="events">
              <Route index element={
                <RequireAuth>
                  <AdminList column={updateColumns} name="Event" />
                </RequireAuth>
              } />

              <Route path=":eventId" element={
                <RequireAuth>
                  <Single />
                </RequireAuth>
              } />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
