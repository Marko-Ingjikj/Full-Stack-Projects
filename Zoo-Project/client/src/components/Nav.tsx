const Nav = () => {
  return (
    <nav>
      <div className="logo-div">
        <h1 className="h1-logo">Marko's Zoo</h1>
      </div>
      <div className="links-div">
        <a className="nav-link" href="/">
          About
        </a>
        <a className="nav-link" href="/animals">
          Animals
        </a>
        <a className="nav-link" href="/zookeepers">
          Zookeepers
        </a>
      </div>

      <div className="links-div">
        <a className="nav-link" href="/login">
          Login
        </a>
        <a className="nav-link" href="/register">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Nav;
