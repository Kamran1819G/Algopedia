import {React} from 'react'
import { Helmet } from 'react-helmet'
import { Col, Container, Row } from 'react-bootstrap'
function PageNotFound() {

  return (
    <>
    <Helmet>
        <title>404: Page Not Found | Algopedia</title>
    </Helmet>
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