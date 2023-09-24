import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import registerImg from "../../assets/registerImg.png";
import { User } from "../../interfaces/user.interface";

const Register = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/user");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleRegister = async () => {
    try {
      // If first user make admin, every other user registered will first be user
      if (users?.length != 0) {
        await axios.post("http://localhost:3000/auth/register", {
          name,
          email,
          password,
          role: "user",
        });
      } else {
        await axios.post("http://localhost:3000/auth/register", {
          name,
          email,
          password,
          role: "admin",
        });
      }

      navigate("/login");
    } catch (error) {
      toast.error("Something went wrong, please try again", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="register-main">
      <div className="login-details">
        <img className="login-logo" src={registerImg} alt="register image" />
        <div className="login-credentials">
          <h1>Register</h1>
          <div className="login-field">
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="enter name..."
              className="account-input"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            disabled={!password || !email || !name || !isValidEmail(email)}
            className="account-button"
            onClick={() => handleRegister()}>
            Register
          </button>
          <div className="error-message">
            {!password || !email || !name || !isValidEmail(email)
              ? "please enter profile details"
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
