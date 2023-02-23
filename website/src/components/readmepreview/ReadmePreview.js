import React,{useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import {marked} from "marked";

function ReadmePreview({ readmeRawUrl }) {
  const [readme, setReadme] = useState('');
  useEffect(() => {
    fetch(readmeRawUrl)
      .then((response) => response.text())
      .then((text) => {
        setReadme(text);
      });
  }, [readmeRawUrl]);

  useEffect(() => {
    const readmeDiv = document.getElementById("readme");
    readmeDiv.innerHTML = marked.parse(readme);
  }, [readme]);

  return (
    <Container fluid="lg">
      <Row>
        <Col lg="12">
          <div className="readme-preview">
            <h3 className="">About this Algorithm:</h3>
            <div id="readme"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ReadmePreview;
