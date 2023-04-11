import{React, useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";

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

ReactGA.initialize('G-0GC47WHF6L', {
  titleCase: true,
  gaOptions: {
    siteSpeedSampleRate: 100
  }
});

function App() {
  const [show, setShow] = useState(true);
  const [Algorithms, setAlgorithms] = useState([]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Kamran1819G/Algopedia/main/Algorithms.json');
      const json = await response.json();
      setAlgorithms(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Alert show={show}  onClose={() => setShow(false)}  dismissible  variant="warning">
        <Alert.Heading>Algopedia is currently under development!</Alert.Heading>
        <hr/>
        <p>
        Thank you for visiting our website. We are working hard to make it better. In the meantime, please feel free to use our
        existing features or contact us if you have any questions. If you want to contribute to Algopedia, please visit our <a href="https://github.com/Kamran1819G/Algopedia">Github Repository</a>
        </p>
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
