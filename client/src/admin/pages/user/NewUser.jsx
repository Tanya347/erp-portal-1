import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { roles, teams, integ_subteams, team_subteams } from "../../formSource"

const NewUser = ({ inputs, title }) => {

  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {

      const newuser = {
        ...info
      }

      axios.post("http://localhost:5500/api/auth/register", newuser, {
        withCredentials: false
      })
      navigate(-1)

    } catch (error) {
      console.log(error)
    }
  }

  console.log(info)

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
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

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}

              <div className="formInput">
                <label>Year</label>
                <select
                  id="year"
                  onChange={handleChange}
                >
                  <option value={0}>-</option>
                  <option value={1}>1st</option>
                  <option value={2}>2nd</option>
                  <option value={3}>3rd</option>
                  <option value={4}>4th</option>
                </select>
              </div>

              <div className="formInput">
                <label>Choose a Team</label>
                <select
                  id="team"
                  onChange={handleChange}
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

export default NewUser;
