import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notfound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Layout>
          <div></div>
        </Layout>
      </Router>
    </>
  );
};

export default App;
