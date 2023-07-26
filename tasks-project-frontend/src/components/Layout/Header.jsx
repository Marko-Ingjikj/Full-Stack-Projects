import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h2>Tasks Manager</h2>
      <Link to={"/form"} className="new-task">
        New Task
      </Link>
    </nav>
  );
};

export default Header;
