import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

function ReportIssue() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="section">
      <Container fluid="lg">
        <Row>
          <Col lg="12" className="mx-auto">
            <div className="section-title text-center">
              <h1 className="title">Report Issue</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Github Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter GitHub username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Detailed steps to reproduce the issue</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Tell about issue and one which algorithm you are facing on issue"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please address issue.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>
                  Expected outcome and actual outcome (Optional)
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Tell about Expected outcome and actual outcome"
                />
              </Form.Group>
            </Row>
            <Form.Group controlId="validationCustom05">
              <Form.Label>
                Relevant screenshots or error messages (Optional)
              </Form.Label>
              <Form.Control type="file" name="file" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Row>
      </Container>
    </section>
  );
}

export default ReportIssue;
