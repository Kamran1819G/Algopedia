import {React, useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ReactGA from "react-ga";
import CodePreview from "../components/codepreview/CodePreview";
import ReadmePreview from "../components/readmepreview/ReadmePreview";
import "../css/[Algorithm].css";
import AlgorithmCard from "../components/algorithmcard/AlgorithmCard";
import SearchBar from "../components/searchsystem/SearchBar";

function Algorithm({ data }) {
  const [results, setResults] = useState([]);
  const [Algorithms, setAlgorithms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Kamran1819G/Algopedia/main/Algorithms.json"
      );
      const json = await response.json();
      setAlgorithms(json);
    };
    fetchData();
  }, []);
  const handleSearch = (query) => {
    ReactGA.event({
      category: "Search",
      action: "Search",
      label: query,
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
      <title>{data.name} | Algopedia</title>
    </Helmet>
    <Container>
      <Row className="mt-5">
        <Col lg="10" className="pb-3">
          <SearchBar onSearch={handleSearch} />
        </Col>
        <Col lg="12" md="12" sm="10">
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
                <Col lg={9} sm={12}>
                  <Tab.Content>
                    <h4>Category: {data.category}</h4>
                    <h1>{data.name}</h1>
                    <Tab.Pane eventKey="c_lang">
                      <CodePreview codePath={data.c_path} language="c" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="cpp_lang">
                      <CodePreview codePath={data.cpp_path} language="cpp" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="java_lang">
                      <CodePreview codePath={data.java_path} language="java" />
                    </Tab.Pane>
                    <Tab.Pane eventKey="python_lang">
                      <CodePreview
                        codePath={data.python_path}
                        language="python"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="javascript_lang">
                      <CodePreview
                        codePath={data.javascript_path}
                        language="javascript"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            <ReadmePreview readmePath={data.readme} readmeTitle="Learn about this algorithm:"/>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Algorithm;
