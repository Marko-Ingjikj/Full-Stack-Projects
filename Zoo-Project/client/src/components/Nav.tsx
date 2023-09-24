import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../common/AuthContext";

const Nav = () => {
  const { accessToken } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));
  const [loggedIn, setLoggedIn] = useState(!!accessToken);

  const handleLogout = () => {
    logout();
    setUserRole(null);
    setLoggedIn(false);
  };

  useEffect(() => {
    if (accessToken) {
      setUserRole(localStorage.getItem("role"));
    } else {
      setUserRole(null);
    }
    setLoggedIn(!!accessToken);
  }, [accessToken]);

  return (
    <nav>
      <div className="logo-div logo-disappear">
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

      <div className="links-div big-width">
        {userRole === "admin" && (
          <Link to={"/admin-settings"} className="nav-link">
            Admin Settings
          </Link>
        )}
        {loggedIn && (
          <Link to="/login" className="nav-link" onClick={() => handleLogout()}>
            Logout
          </Link>
        )}
      </div>
      <div className="links-div small-width">
        {userRole === "admin" && (
          <Link to={"/admin-settings"} className="nav-link">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="nav-icon">
              <path
                fill="none"
                stroke="#000"
                strokeWidth="2"
                d="M18.0003,20.9998 C16.3453,20.9998 15.0003,19.6538 15.0003,17.9998 C15.0003,16.3458 16.3453,14.9998 18.0003,14.9998 C19.6543,14.9998 21.0003,16.3458 21.0003,17.9998 C21.0003,19.6538 19.6543,20.9998 18.0003,20.9998 L18.0003,20.9998 Z M24.0003,17.9998 L21.0003,17.9998 L24.0003,17.9998 Z M20.1213,20.1218 L22.2423,22.2428 L20.1213,20.1218 Z M18.0003,23.9998 L18.0003,20.9998 L18.0003,23.9998 Z M13.7573,22.2428 L15.8783,20.1208 L13.7573,22.2428 Z M12.0003,17.9998 L15.0003,17.9998 L12.0003,17.9998 Z M15.8783,15.8788 L13.7573,13.7578 L15.8783,15.8788 Z M18.0003,14.9998 L18.0003,11.9998 L18.0003,14.9998 Z M20.1213,15.8788 L22.2423,13.7578 L20.1213,15.8788 Z M12.5,12.5 C11.2660678,11.4458897 9.77508483,11 8,11 C4.13400675,11 1,13.0294373 1,18 L1,23 L11,23 M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z"></path>
            </svg>
          </Link>
        )}
        {loggedIn && (
          <Link to="/login" className="nav-link" onClick={() => handleLogout()}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </Link>
        )}
      </div>

      {!loggedIn && (
        <div className="links-div big-width">
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>
      )}

      {!loggedIn && (
        <div className="links-div small-width">
          <Link className="nav-link" to="/login">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M13 16L18 12 13 8 13 11 4 11 4 13 13 13z"></path>
              <path d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"></path>
            </svg>
          </Link>
          <Link className="nav-link" to="/register">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              className="nav-icon"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
