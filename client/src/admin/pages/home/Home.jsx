import Sidebar from "../../../components/sidebar/Sidebar";
import AdminNavbar from "../../../components/adminNavbar/AdminNavbar";
import "./home.scss";


const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="AdminHomeContainer">
        <AdminNavbar />

      </div>
    </div>
  );
};

export default Home;
