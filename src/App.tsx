import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Countries from "./pages/countries";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Charizard from "./pages/charizard";
import Berries from "./pages/berries";
import Profile from "./pages/profile";
import Practice from "./pages/practice";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/countries" element={<Countries />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Charizard" element={<Charizard />}></Route>
          <Route path="/Berries" element={<Berries />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Practice" element={<Practice/>}></Route>
        </Routes>
        <Layout>
          <div></div>
        </Layout>
      </Router>
    </>
  );
};

export default App;
