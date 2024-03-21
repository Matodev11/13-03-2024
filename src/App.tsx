import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notfound";
import Countries from "./components/countries";
import NavBar from "./components/navbar";
import About from "./components/about";

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
        </Routes>
        <Layout>
          <div></div>
        </Layout>
      </Router>
    </>
  );
};

export default App;
