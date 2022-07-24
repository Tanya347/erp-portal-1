import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const Single = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="single">
      {/* <Sidebar /> */}
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{user.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{user._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{user.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Branch:</span>
                  <span className="itemValue">{user.branch}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Year:</span>
                  <span className="itemValue">{user.year}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{user.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Team:</span>
                  <span className="itemValue">{user.team}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sub Team:</span>
                  <span className="itemValue">{user.subteam}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">GEC:</span>
                  <span className="itemValue">{(user.isGEC) ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>

            <button>Edit</button>
            <button>Folder Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
