import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer>
        <Container className="footer-container">
          <Row className="d-flex justify-content-around">
            <Col lg="4" className="footer-about">
              <h3 className="footer-title">Algorithms Library</h3>
              <p className="footer-subtitle">
                GitHub's largest open-source algorithm library
              </p>
            </Col>
            <Col lg="4" className="text-center">
              <h3 className="footer-title text-center">Products</h3>
              <ul className="product-items">
                <li className="product-item">
                  <a href="none" target="_blank">
                    Learn HTML
                  </a>
                </li>
                <li className="product-item">
                  <a href="none" target="_blank">
                    Learn CSS
                  </a>
                </li>
                <li className="product-item" >
                  <a href="none" target="_blank">
                    Learn JavaScript
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="4" className="text-center">
              <h3 className="footer-title">Follow Us</h3>
              <ul className="footer-social-icons">
                <li className="footer-social-icon">
                  <a href="none" target="_blank">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a href="none" target="_blank">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a href="none" target="_blank">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a href="none" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="footer-social-icon">
                  <a href="none" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="text-center">
              <p className="footer-text">
                © 2023 Algorithms Library. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
