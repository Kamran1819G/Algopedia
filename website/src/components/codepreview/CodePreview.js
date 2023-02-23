import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.min.css";
import "prismjs/components/prism-c.min.js";
import "prismjs/components/prism-cpp.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import "prismjs/plugins/match-braces/prism-match-braces.min";
import "prismjs/plugins/match-braces/prism-match-braces.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";

const CodePreview = ({ codeRawUrl, language }) => {
  const [code, setCode] = useState("");
  useEffect(() => {
    Prism.highlightAll(code);
  }, [code]);

  useEffect(() => {
    fetch(codeRawUrl, {
      headers: {
          'Accept': 'text/plain'
        }
      })
      .then((response) => response.text())
      .then((text) => setCode(text));
  }, [codeRawUrl]);



  return (
    <Container fluid="lg">
      <Row>
        <Col lg="12">
          <div className="code-preview">
            <pre className="copy-to-clipboard line-numbers">
              <code
                className={`language-${language} match-braces rainbow-braces`}
              >
                {code}
              </code>
            </pre>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CodePreview;
