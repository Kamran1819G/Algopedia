import React, { useState} from "react";
import { Route, Routes } from "react-router-dom";

import "./css/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

import Alert from "react-bootstrap/Alert";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/footer/Footer";
import ParticlesBackground from "./components/particles/ParticlesBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import ReportIssue from "./pages/ReportIssue";
import PageNotFound from "./pages/404-PageNotFound";
import Algorithm from "./pages/[Algorithm]";

function App() {
  const [show, setShow] = useState(true);
  const Algorithms  = "https://api.github.com/repos/Kamran1819G/Algopedia/contents/Algorithms.json";
  return (
    <>
      <Navbar />
      <Alert
        show={show}
        onClose={() => setShow(false)}
        dismissible
        variant="warning"
      >
        Thank you for visiting our website. Our new feature is currently under
        development and will be available soon. We apologize for any
        inconvenience this may cause and appreciate your patience as we work to
        improve our service. In the meantime, please feel free to use our
        existing features or contact us if you have any questions.
      </Alert>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="*" element={<PageNotFound />} />
        {
          Algorithms.map(algorithm => (
              <Route
                key={algorithm.title}
                path={`/algorithm/${algorithm.title}`}
                element={<Algorithm data={algorithm}/>}
              />
          ))
        }
      </Routes>
      <Footer />
      <ParticlesBackground />
    </>
  );
}

export default App;
