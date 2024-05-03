import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./pages/profile";
import About from "./pages/about";
import Berries from "./pages/berries";
import Charizard from "./pages/charizard";
import Countries from "./pages/countries";
import Home from "./pages/home";
import Practice from "./pages/practice";
import NotFound from "./pages/notfound";
import Vjezbe from "./pages/vjezbe";
import DataTypes from "./pages/data-types";
import Gallery from "./pages/gallery";
import Main from "./pages/main";
import Glumci from "./pages/glumci";
import Games from "./pages/games";
import GameInfo from "./pages/gameinfo";
import Cars from "./pages/cars";
import Glovo from "./components/glovo";
import Form from "./components/form";
import Vjezba1 from "./pages/vjezba-1";
import Phones from "./pages/phones";
import PhonesCreate from "./pages/phones-create";
import List from "./pages/list";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/countries" element={<Countries />} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/Charizard" element={<Charizard />}></Route>
          <Route path="/Berries" element={<Berries />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Practice" element={<Practice />}></Route>
          <Route path="/Vjezbe" element={<Vjezbe />}></Route>
          <Route path="/Data-types" element={<DataTypes />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route path="/Glumci" element={<Glumci />}></Route>
          <Route path="/Games">
            <Route index element={<Games />} />
            <Route path=":gameId" element={<GameInfo />} />
          </Route>
          <Route path="Cars" element={<Cars />}>
            {" "}
          </Route>
          <Route path="Glovo" element={<Glovo />}></Route>
          <Route path="Form" element={<Form />}></Route>
          <Route path="Vjezba1" element={<Vjezba1 />}></Route>
          <Route path="phones" element={<Phones />} />
          <Route path="phones">
            <Route index element={<Phones />} />
            <Route path="new" element={<PhonesCreate />} />
          </Route>
          <Route path="List" element={<List />}></Route>
        </Routes>

        <Layout>
          <div></div>
        </Layout>
      </Router>
    </>
  );
};

export default App;
