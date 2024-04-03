import Loader from "../components/loader";
import { navData } from "../components/navbar";

const Home = () => {
  return (
    <>
    <Loader>
    <nav className="navbar__home">
     {navData.map((nav, index)=> {
            return  <a key={index} className="navbar__links" href={nav.url}>
            {nav.label}
          </a>
        })}
        </nav>
      <h1 className="home__header">This is homepage</h1>
      <p className="home__p">Additional content will be added soon!</p>
      </Loader>
    </>
  );
};

export default Home;
