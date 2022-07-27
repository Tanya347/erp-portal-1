import "./adminSingle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import AdminNavbar from "../../../components/adminNavbar/AdminNavbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
import useFetch from "../../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const AdminSingle = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const { data } = useFetch(`/users/${id}`)

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <AdminNavbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{data.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Branch:</span>
                  <span className="itemValue">{data.branch}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Year:</span>
                  <span className="itemValue">{data.year}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{data.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Team:</span>
                  <span className="itemValue">{data.team}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sub Team:</span>
                  <span className="itemValue">{data.subteam}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">GEC:</span>
                  <span className="itemValue">{(data.isGEC) ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>

            <button>Edit</button>
            <button><a href={`${data.folderLink}`} target='_blank' rel="noopener">Folder Link</a></button>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
        {/* <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default AdminSingle;
