import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { roles } from "../../formSource"

const NewUser = ({ inputs, title }) => {

  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dnzkakna0/image/upload",
        data, {
        withCredentials: false
      }
      )
      const { url } = uploadRes.data;
      const { public_id } = uploadRes.data;
      const newuser = {
        ...info, img: url, cloud_id: public_id
      }

      axios.post("https://stay-solutions.herokuapp.com/api/auth/register", newuser)
      // axios.post("http://localhost:8800/api/auth/register", newuser)
      navigate(-1)

    } catch (error) {
      console.log(error)
    }
  }

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
                // onChange={handleChange}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    // onChange={handleChange} 
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Choose a Role</label>
                <select
                  id="roleId"
                // onChange={(e) => setHotelId(e.target.value)}
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.value}>{r.role}</option>
                  ))}

                </select>

              </div>
              {/* <button onClick={handleClick}>Send</button> */}
            </form>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
