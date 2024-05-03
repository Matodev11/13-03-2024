import Berries from "./berries";
import Charizard from "./charizard";
import Countries from "./countries";
import Practice from "./practice";
import Profile from "./profile";
import Gallery from "./gallery";
import Main from "./main";
import Glumci from "./glumci";
import Games from "./games";
import Cars from "./cars";
import Glovo from "../components/glovo";
import Form from "../components/form";
import Vjezba1 from "./vjezba-1";
import Phones from "./phones";
import List from "./list";

export const vjezbeArr = [
  { label: "Berries vjezba", url: "/Berries", element: <Berries /> },
  { label: "Charizard vjezba", url: "/Charizard", element: <Charizard /> },
  { label: "Countries vjezba", url: "/Countries", element: <Countries /> },
  { label: "Practice vjezba", url: "/Practice", element: <Practice /> },
  { label: "Profile vjezba", url: "/Profile", element: <Profile /> },
  { label: "Gallery vjezba", url: "/Gallery", element: <Gallery /> },
  { label: "Home", url: "/" },
  { label: "Main vjezba", url: "/Main", element: <Main /> },
  { label: "Glumci", url: "/Glumci", element: <Glumci /> },
  { label: "Games", url: "/Games", element: <Games /> },
  { label: "Cars", url: "/Cars", element: <Cars /> },
  { label: "Glovo", url: "/Glovo", element: <Glovo /> },
  { label: "Form", url: "/Form", element: <Form /> },
  { label: "Vjezba1", url: "/Vjezba1", element: <Vjezba1 /> },
  { label: "Phones", url: "/Phones", element: <Phones /> },
  { label: "List", url: "/List", element: <List /> },
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
