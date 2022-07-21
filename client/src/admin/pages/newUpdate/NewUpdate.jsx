import "./newUpdate.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUpdate = ({ inputs, title }) => {
  const [info, setInfo] = useState({});
  const [hotelId, setHotelId] = useState(undefined);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const { data, loading } = useFetch("/hotels");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const roomNumbers = rooms.split(",").map((room) =>
      ({ number: room }));
    try {
      // await axios.post(`/rooms/${hotelId}`, { ...info, roomNumbers })

      await axios.post(`https://stay-solutions.herokuapp.com/api/rooms/${hotelId}`, { ...info, roomNumbers })
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
          <h1>Add New Update</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                  // onChange={handleChange}
                  />
                </div>
              ))}

              {/* <button onClick={handleClick}>Send</button> */}

            </form>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUpdate;
