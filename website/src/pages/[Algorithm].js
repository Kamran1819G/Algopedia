import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import CodePreview from "../components/codepreview/CodePreview";
import ReadmePreview from "../components/readmepreview/ReadmePreview";
import "../css/[Algorithm].css";

function Algorithm({ data }) {
  let url =
    "https://raw.githubusercontent.com/kamran1819g/algopedia/main";
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="algorithm-page">
            <Tab.Container defaultActiveKey="java_lang">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="c_lang">C</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cpp_lang">C++</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="java_lang">Java</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="python_lang">Python</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="javascript_lang">JavaScript</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <h4>Category: {data.category}</h4>
                    <h1>{data.name}</h1>
                    <Tab.Pane eventKey="c_lang">
                      <CodePreview
                        codeRawUrl={url + data.c_path}
                        language="c"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="cpp_lang">
                      <CodePreview
                        codeRawUrl={url + data.cpp_path}
                        language="cpp"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="java_lang">
                      <CodePreview
                        codeRawUrl={url + data.java_path}
                        language="java"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="python_lang">
                      <CodePreview
                        codeRawUrl={url + data.python_path}
                        language="python"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="javascript_lang">
                      <CodePreview
                        codeRawUrl={url + data.javascript_path}
                        language="javascript"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <ReadmePreview
              readmeRawUrl={
                "https://raw.githubusercontent.com/Kamran1819G/AlgorithmsLibrary/main" +
                data.readme
              }
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Algorithm;
