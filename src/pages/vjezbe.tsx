import Berries from "./berries";
import Charizard from "./charizard";
import Countries from "./countries";
import Practice from "./practice";
import Profile from "./profile";
import Gallery from "./gallery";
import Main from "./main";

export const vjezbeArr = [
  { label: "Berries vjezba", url: "/Berries", element: <Berries /> },
  { label: "Charizard vjezba", url: "/Charizard", element: <Charizard /> },
  { label: "Countries vjezba", url: "/Countries", element: <Countries /> },
  { label: "Practice vjezba", url: "/Practice", element: <Practice /> },
  { label: "Profile vjezba", url: "/Profile", element: <Profile /> },
  { label: "Gallery vjezba", url: "/Gallery", element: <Gallery /> },
  { label: "Home", url: "/" },
  { label: "Main vjezba", url: "/Main", element: <Main /> },
];

const Vjezbe = () => {
  return (
    <>
      <nav className="navbar">
        {vjezbeArr.map((link2, index) => {
          return (
            <a key={index} className="navbar__links" href={link2.url}>
              {link2.label}
            </a>
          );
        })}
      </nav>
      <h1>Popis vjezbi</h1>
    </>
  );
};

export default Vjezbe;
