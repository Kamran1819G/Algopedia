import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FAQ from "../components/FAQ";
import { Helmet } from "react-helmet";
function About() {
  return (
    <>
    <Helmet>
      <title>About | Algopedia</title>
    </Helmet>
    <section className="section">
      <Container>
        <Row>
          <Col lg="12" className="mx-auto">
            <div className="section-title text-center">
              <h1 className="title">About</h1>
            </div>
            <FAQ/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default About;
