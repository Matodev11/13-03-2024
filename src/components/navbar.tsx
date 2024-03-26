import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar__links" to="/">
          Home
        </Link>
        <Link className="navbar__links" to="/countries">
          Countries
        </Link>
        <Link className="navbar__links" to="/About">
          About
        </Link>
        <Link className="navbar__links" to="/Charizard">
          Charizard
        </Link>
        <Link className="navbar__links" to="Berries">
          Berries
        </Link>
        <Link className="navbar__links" to="Profile">
          Profile
        </Link>
        <Link className="navbar__links" to="Practice">
          Practice{" "}
        </Link>
        <Link className="navbar__links" to="Vjezbe">
          Vjezbe
        </Link>
        <Link className="navbar__links" to="Data-types">
          Data types
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
