import React, { useState,useEffect } from "react";
import "../css/Home.css";
import AlgorithmCard from "../components/algorithmcard/AlgorithmCard";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/searchsystem/SearchBar";
import { Helmet } from "react-helmet";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-205765794-1');
ReactGA.pageview(window.location.pathname + window.location.search);


function Home() {
  const [results, setResults] = useState([]);
  const [Algorithms, setAlgorithms] = useState([]);
  const [PopularAlgorithms, setPopularAlgorithms] = useState([]);
  const [FeaturedAlgorithms, setFeaturedAlgorithms] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Kamran1819G/Algopedia/main/Algorithms.json');
      const json = await response.json();
      setAlgorithms(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Kamran1819G/Algopedia/main/PopularAlgorithms.json');
      const json = await response.json();
      setPopularAlgorithms(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Kamran1819G/Algopedia/main/FeaturedAlgorithms.json');
      const json = await response.json();
      setFeaturedAlgorithms(json);
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    ReactGA.event({
      category: 'Search',
      action: 'Search',
      label: query
    });
    if (query.length >= 2) {
      const matchedResults = Algorithms.filter((algorithm) =>
        algorithm.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(matchedResults);
    } else {
      setResults([]);
    }
    if (query === "") {
      setResults([]);
    }
  };

  return (
    <>
    <Helmet>
      <title>Algopedia | GitHub's largest open-source algorithm library</title>
    </Helmet>
      <section className="section intro-section">
        <Container fluid="lg">
          <Row>
            <Col lg="12">
              <div>
                <h1 className="landing-title">Welcome to Algopedia</h1>
                <h3 className="landing-subtitle">
                  GitHub's largest open-source algorithm library
                </h3>
              </div>
            </Col>
            <Col lg={6} sm={12} className="pb-5">
              <SearchBar onSearch={handleSearch} />
            </Col>
            <Col lg={12} md={12} sm={12}>
              {results.length > 0 && (
                <Row xs={1} md={4} className="g-5">
                  {results.map((item) => {
                    return (
                      <Col>
                        <AlgorithmCard
                          key={item.title}
                          title={item.name}
                          category={item.category}
                          url={item.url}
                        />
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="popular-algorithms-section">
        <Container fluid="lg">
          <Row>
            <Col lg={12}>
              <div className="section-title text-center">
                <h1 className="title">Popular Algorithms</h1>
              </div>
              <div className="card-container d-flex justify-content-evenly">
                {PopularAlgorithms.map((item) => {
                  return (
                    <AlgorithmCard
                      key={item.id}
                      title={item.title}
                      category={item.category}
                      url={item.url}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="latest-algorithms-section">
        <Container fluid="lg">
          <Row>
            <Col lg={12}>
              <div className="section-title text-center">
                <h1 className="title">Featured Algorithms</h1>
              </div>
              <div className="card-container d-flex justify-content-evenly">
                {FeaturedAlgorithms.map((item) => {
                  return (
                    <AlgorithmCard
                      key={item.id}
                      title={item.title}
                      category={item.category}
                      url={item.url}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
