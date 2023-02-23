import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FAQ from "../components/FAQ";
function About() {
  return (
    <>
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
