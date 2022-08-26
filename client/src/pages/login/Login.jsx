import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import bg from "./CSD_logo.png";
import bg2 from "./body-background.png";

function Login({ type }) {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5500/api/auth/login",
        credentials,
        { withCredentials: false }
      );
      if (type === "Admin") {
        if (res.data.isAdmin) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          navigate("/admin");
        } else {
          dispatch({
            type: "LOGIN_FAILURE",
            payload: { message: "You are not allowed" },
          });
        }
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="AdminLogin">
      <div className="left">
        <img src={bg} alt="" />
      </div>
      <div className="lContainer">
        {/* <img src={bg2} alt="" /> */}
        <div className="l_heading">
          <h1>
            We are <span>CSD</span>
          </h1>
          <p>Welcome back! Log in to access your account:</p>
        </div>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
}

export default Login;
