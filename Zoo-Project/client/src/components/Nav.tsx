import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./common/AuthContext";

const Nav = () => {
  const { accessToken } = useContext(AuthContext);
  const loggedIn = !!accessToken;
  // console.log(accessToken);
  // console.log(loggedIn);

  return (
    <nav>
      <div className="logo-div">
        <h1 className="h1-logo">Marko's Zoo</h1>
      </div>
      <div className="links-div">
        <Link className="nav-link" to="/">
          About
        </Link>
        <Link className="nav-link" to="/animals">
          Animals
        </Link>
        <Link className="nav-link" to="/zookeepers">
          Zookeepers
        </Link>
      </div>

      {loggedIn ? (
        <button>Logout</button>
      ) : (
        <div className="links-div">
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
