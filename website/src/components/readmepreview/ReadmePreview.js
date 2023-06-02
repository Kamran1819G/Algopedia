import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { marked } from "marked";

function ReadmePreview({ readmePath }) {
  const [readme, setReadme] = useState("");
  const readmeRawUrl =
    "https://raw.githubusercontent.com/Kamran1819G/Algopedia/main" + readmePath;
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
            <div id="readme"></div>
          </div>
          <div className="d-flex justify-content-end">
            <a
              className="btn btn-primary"
              href={
                "https://github.com/Kamran1819G/Algopedia/tree/main" +
                readmePath
              }
              rel="noreferrer"
              target="_blank"
            >
              <i className="bi bi-git"></i> Make a contribution
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ReadmePreview;
