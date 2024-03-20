import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <a className="navbar__links">
          <Link to="/">Home</Link> <Link to="/countries">Countries</Link>{" "}
          <Link to="/About">About</Link>
        </a>
      </nav>
    </>
  );
};

export default NavBar;
