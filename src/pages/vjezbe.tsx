import { Link } from "react-router-dom";
import About from "./about";
import Berries from "./berries";
import Charizard from "./charizard";
import Countries from "./countries";
import Home from "./home";
import Practice from "./practice";
import Profile from "./profile";

const vjezbeArr = [
  { label: "About vjezba", url: "/About", element: <About /> },
  { label: "Berries vjezba", url: "/Berries", element: <Berries /> },
  { label: "Charizard vjezba", url: "/Charizard", element: <Charizard /> },
  { label: "Countries vjezba", url: "/Countries", element: <Countries /> },
  { label: "Home", url: "/Home", element: <Home /> },
  { label: "Practice vjezba", url: "/Practice", element: <Practice /> },
  { label: "Profile vjezba", url: "/Profile", element: <Profile /> },
];

const Vjezbe = () => {
  return (
    <>
      <h1>Popis vjezbi</h1>
      <div className="vjezbe">
        {vjezbeArr.map((link) => {
          return (
            <nav>
              <Link className="navbar__links" to={link.url}></Link>
            </nav>
          );
        })}
      </div>
    </>
  );
};

export default Vjezbe;
