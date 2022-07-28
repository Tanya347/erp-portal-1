import "./editUser.scss";
import Navbar from "../../../components/navbar/Navbar";
import { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const NewUser = ({ title }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [info, setInfo] = useState(user);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }


  const handleClick = async (e) => {
    e.preventDefault();
    try {

      // axios.post("https://stay-solutions.herokuapp.com/api/auth/register", newuser)
      await axios.put(`http://localhost:5500/api/users/${user._id}`, info, {
        withCredentials: false
      })
      localStorage.setItem("user", JSON.stringify(info));
      navigate(-1)

    } catch (error) {
      console.log(error)
    }
  }

  console.log(info)

  return (
    <div className="new">
      {/* <Sidebar /> */}
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="right">
            <form>

              <div className="formInput" >
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  value={info.name}
                />
              </div>

              <div className="formInput" >
                <label>Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter email"
                  id="email"
                  value={info.email}
                />
              </div>

              <div className="formInput" >
                <label>Phone Number</label>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter phone number"
                  id="phone"
                  value={info.phone}
                />
              </div>

              <div className="formInput" >
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
                <label>Year</label>
                <select
                  id="year"
                  onChange={handleChange}
                >
                  <option value={0}>{info.year}</option>
                  <option value={"1st"}>1st</option>
                  <option value={"2nd"}>2nd</option>
                  <option value={"3rd"}>3rd</option>
                  <option value={"4th"}>4th</option>
                </select>
              </div>
              {/* <div className="formInput">
                <label>Choose a Role</label>
                <select
                  id="role"
                  onChange={handleChange}
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.value}>{r.role}</option>
                  ))}

                </select>

              </div> */}
            </form>
            <button onClick={handleClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
