import { useContext, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../common/AuthContext";
import loginImg from "../../assets/loginImg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handeLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      const { accessToken, user } = response.data;
      localStorage.setItem("accessToken", accessToken);

      login(accessToken);

      localStorage.setItem("name", user.name);
      localStorage.setItem("role", user.role);

      navigate("/about");
    } catch (error) {
      setEmail("");
      setPassword("");
      toast.error("Wrong credentials, please try again", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="login-main">
      <div className="login-details">
        <img className="login-logo" src={loginImg} alt="" />
        <div className="login-credentials">
          <h1>Login</h1>
          <div className="login-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="account-input"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password..."
              className="account-input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={() => handeLogin()}
            disabled={!password || !email}
            className="account-button">
            Login
          </button>
          <div className="error-message">
            {!password || !email ? "please enter credentials" : ""}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
