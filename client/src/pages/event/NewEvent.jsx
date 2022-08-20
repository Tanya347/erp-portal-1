import "./newEvent.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const NewEvent = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  console.log(start);
  console.log(end)

  const handleClick = async (e) => {
    e.preventDefault();
    if (file) {
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
        const newevent = {
          ...info, poster: url, cloud_id: public_id, startDate: start, endDate: end
        }
        console.log(newevent)
        axios.post("http://localhost:5500/api/events", newevent, { withCredentials: false })
        navigate(-1)

      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const newevent = {
          ...info, startDate: start, endDate: end
        }
        await axios.post("http://localhost:5500/api/events", newevent, { withCredentials: false })
        navigate(-1)
      }
      catch (err) {
        console.log(err)
      }
    }
  }


  return (

    <div className="new">
      {/* <Sidebar /> */}
      <div className="newEventContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              <DatePicker
                class="date-picker"
                showTimeSelect
                placeholderText="Start Date"
                style={{ marginRight: "10px" }}
                selected={start}
                onChange={(start) => setStart(start)}
              />
              <DatePicker
                class="date-picker"
                showTimeSelect
                placeholderText="End Date"
                selected={end}
                onChange={(end) => setEnd(end)}
              />

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input onChange={handleChange} type={input.type} placeholder={input.placeholder} id={input.id} />
                </div>
              ))}

              <button onClick={handleClick} id="submit">Create Event</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;