import { Row, Col, Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'

const Home = () => {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <Card>
            <CardBody>
              <h4>Beasky</h4>
            </CardBody>
          </Card>
        </Col>
        <Col lg={8}>
          <Card>
            <CardBody>
              <h4>Beasky</h4>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
