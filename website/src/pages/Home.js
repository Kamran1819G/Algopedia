import React from "react";
import "../css/Home.css";
import AlgorithmCard from "../components/algorithmcard/AlgorithmCard";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import PopularAlgorithms from "../JSON/PopularAlgorithms.json";
import FeaturedAlgorithms from "../JSON/FeaturedAlgorithms.json";
import SearchBar from "../components/searchsystem/SearchBar";
function Home() {
  
  return (
    <>
      <section className="section h-100vh">
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
            <Col lg="12">
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="popular-algorithms-section">
        <Container fluid="lg">
          <Row>
            <Col lg="12">
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
            <Col lg="12">
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
