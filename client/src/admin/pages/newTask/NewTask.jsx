import "./newTask.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import useFetch from "../../../hooks/useFetch"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { roles } from "../../formSource"

const NewTask = ({ inputs, title }) => {

  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const { data, loading } = useFetch("/rooms")
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value)
  }


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dnzkakna0/image/upload",
            data,
            {
              withCredentials: false
            }
          );
          const { url } = uploadRes.data;
          return url;
        })
      )

      const newhotel = {
        ...info,
        rooms,
        photos: list
      }

      // await axios.post("/hotels", newhotel);
      await axios.post("https://stay-solutions.herokuapp.com/api/hotels", newhotel);
      navigate(-1)
    } catch (err) {
      console.log(err)
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
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    // onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Assigned To</label>
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

export default NewTask;
