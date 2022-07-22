import "./style/dark.scss";
import React, { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext";
import AdminRoutes from "./AdminRoutes";
import MainRoutes from "./MainRoutes";


function App() {
  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>


      {/* ADMIN ROUTES */}

      <AdminRoutes />

      {/* ADMIN ROUTES */}

      <MainRoutes />


    </div>

  );
}

export default App;
