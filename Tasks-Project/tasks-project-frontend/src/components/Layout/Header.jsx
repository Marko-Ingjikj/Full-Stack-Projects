import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const active = location.pathname.includes("/form");

  return (
    <nav>
      <div className="links">
        <Link to={"/"} className={`link ${active ? "" : "active"}`}>
          Home
        </Link>
        <Link to={"/form"} className={`link ${active ? "active" : ""}`}>
          New Task
        </Link>
      </div>

      <h2>Tasks Manager</h2>
    </nav>
  );
};

export default Header;
