import {
  BrowserRouter,
  Routes,
  Route,
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
import { hotelColumns, userColumns, roomColumns } from "./admin/datatablesource";
import { userInputs, taskInputs, updateInputs } from "./admin/formSource"


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>

          {/* admin routes */}
          <Route path="/admin">
            <Route path="login" element={<AdminLogin />} />

            <Route index element={<AdminHome />} />
            <Route path="users">
              <Route index element={
                <AdminList column={userColumns} name="User" />
              } />

              <Route path=":userId" element={
                <Single />
              } />

              <Route
                path="new" element={
                  <NewUser inputs={userInputs} title="Add New User" />
                } />
            </Route>


            <Route path="tasks">
              <Route index element={
                <AdminList column={hotelColumns} name="Task" />
              } />

              <Route path=":taskId" element={
                <Single />
              } />

              <Route
                path="new" element={
                  <NewTask inputs={taskInputs} title="Add New Task" />
                } />
            </Route>

            <Route path="updates">
              <Route index element={
                <AdminList column={roomColumns} name="Update" />
              } />

              <Route path=":updateId" element={
                <Single />
              } />

              <Route
                path="new" element={
                  <NewUpdate inputs={updateInputs} title="Add New Update" />
                }
              />
            </Route>

            <Route path="events">
              <Route index element={
                <AdminList column={roomColumns} name="Event" />
              } />

              <Route path=":eventId" element={
                <Single />
              } />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
