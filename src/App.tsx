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


const App = () => {
  return (
    <>
      <Router>
        

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Charizard" element={<Charizard />}></Route>
          <Route path="/Berries" element={<Berries />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Practice" element={<Practice />}></Route>
          <Route path="/Vjezbe" element={<Vjezbe />}></Route>
          <Route path="/Data-types" element={<DataTypes />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
        </Routes>
        <Layout>
          <div></div>
        </Layout>
      </Router>
    </>
  );
};

export default App;