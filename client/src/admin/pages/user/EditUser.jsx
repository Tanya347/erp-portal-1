import "./editUser.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import AdminNavbar from "../../../components/adminNavbar/AdminNavbar";
import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom";
import { roles, teams, integ_subteams, team_subteams } from "../../formSource"
import useFetch from "../../../hooks/useFetch";

const EditUser = ({ title }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const { data } = useFetch(`/users/${id}`)
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data)
  }, [data])

  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      axios.put(`http://localhost:5500/api/users/${id}`, info, {
        withCredentials: false
      })
      navigate(-1)

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <AdminNavbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>

              <div className="formInput">
                <label>Taken as GEC</label>
                <select
                  id="isGEC"
                  onChange={handleChange}
                >
                  <option value={false}>-</option>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  value={info.name}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  value={info.email}
                />
              </div>

              <div className="formInput">
                <label>Phone Number</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter phone number"
                  id="phone"
                  value={info.phone}
                />
              </div>

              <div className="formInput">
                <label>Username</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter username"
                  id="username"
                  value={info.username}
                />
              </div>

              <div className="formInput">
                <label>Branch</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter branch"
                  id="branch"
                  value={info.branch}
                />
              </div>

              <div className="formInput">
                <label>Folder Link</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter user's folder"
                  id="folderLink"
                  value={info.folderLink}
                />
              </div>

              <div className="formInput">
                <label>Year</label>
                <select
                  id="year"
                  onChange={handleChange}
                  value={info.year}
                >
                  <option value={0}>-</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </select>
              </div>

              <div className="formInput">
                <label>Choose a Team</label>
                <select
                  id="team"
                  onChange={handleChange}
                  value={info.team}
                >
                  {teams.map((t) => (
                    <option key={t.id} value={t.team}>{t.team}</option>
                  ))}
                </select>
              </div>

              {info.team === "Integration Team" && <div className="formInput">
                <label>Choose a Sub Team</label>
                <select
                  id="subteam"
                  onChange={handleChange}
                  value={info.subteam}
                >
                  {integ_subteams.map((st) => (
                    <option key={st.id} value={st.subteam}>{st.subteam}</option>
                  ))}
                </select>
              </div>}

              {
                (info.team === "Adira" || info.team === "Cognito" || info.team === "Eudaimonia" || info.team === "Inayat" || info.team === "Pejas" || info.team === "Sashakt Drishti")
                && <div className="formInput">
                  <label>Choose a Sub Team</label>
                  <select
                    id="subteam"
                    value={info.subteam}
                    onChange={handleChange}
                  >
                    {team_subteams.map((st) => (
                      <option key={st.id} value={st.subteam}>{st.subteam}</option>
                    ))}
                  </select>
                </div>
              }

              <div className="formInput">
                <label>Choose a Role</label>
                <select
                  id="role"
                  onChange={handleChange}
                  value={info.role}
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.role}>{r.role}</option>
                  ))}
                </select>
              </div>

            </form>
            <button onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
