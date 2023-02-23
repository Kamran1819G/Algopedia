import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function PageNotFound() {
  return (
    <>
    <section className='section h-100vh'>
    <Container>
        <Row>
            <Col lg="12">
                <h1 className='text-center'>404: Page Not Found</h1>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default PageNotFound