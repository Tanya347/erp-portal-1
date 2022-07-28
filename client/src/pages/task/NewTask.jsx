import "./newTask.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { roles } from "../../formSource"

const NewTask = ({ inputs, title }) => {

  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const newtask = {
        ...info,
      }

      await axios.post("http://localhost:5500/api/tasks", newtask, {
        withCredentials: false
      });
      // await axios.post("https://stay-solutions.herokuapp.com/api/hotels", newhotel);
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(info)

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
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Assigned To</label>
                <select
                  id="assignedTo"
                  onChange={handleChange}
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.value}>{r.role}</option>
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

export default NewTask;
