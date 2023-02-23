import React from "react";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Algopedia?</Accordion.Header>
          <Accordion.Body>
            Algopedia is a website that provides a collection of
            algorithms and data structures implemented in various programming
            languages, including Python, Java, and C++. It is a great resource
            for students, teachers, and professionals who are interested in
            learning more about algorithms and data structures.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Is Algopedia open source?
          </Accordion.Header>
          <Accordion.Body>
            Yes, Algopedia is open source and available on GitHub for
            anyone to use, contribute to, or modify.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How can I contribute to Algopedia?
          </Accordion.Header>
          <Accordion.Body>
            You can contribute to Algopedia by adding new algorithms
            and data structures, improving existing content, or fixing bugs. To
            learn more about contributing to Algopedia, please visit
            our GitHub repository.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Can I use Algopedia in my own projects?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can use Algopedia in your own projects. Algorithms
            Library is licensed under the MIT License, which means you can use
            Algopedia in your own projects without any restrictions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How do I report a bug or issue in Algopedia?
          </Accordion.Header>
          <Accordion.Body>
            If you find a bug or issue in Algopedia, please report it
            on our GitHub repository or on our report issue page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            How do I get help with using Algopedia?
          </Accordion.Header>
          <Accordion.Body>
            You can get help by reaching out to the community through the GitHub
            repository or through other means such as forums or social media.
            The website may also have a contact or support page with additional
            information.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FAQ;
