import { Link } from 'react-router-dom'
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap'
import { Doughnut, Line } from 'react-chartjs-2'

const Home = () => {
  return (
    <div>
      <Row>
        <Col lg={4}>
          <Card>
            <CardBody>
              <Link to="/project">
                <div className="text-center">
                  <h4>Project Cost</h4>
                  <h2 className="text-primary">100, 000</h2>
                </div>
              </Link>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardBody>
              <div className="text-center">
                <h4>Project Cost</h4>
                <h2 className="text-primary">100, 000</h2>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <CardBody>
              <div className="text-center">
                <h4>Project Cost</h4>
                <h2 className="text-primary">100, 000</h2>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                  datasets: [
                    {
                      label: "PROJECT STATISTICS",
                      data: [100000, 200000, 150000, 400000, 350000, 603202, 480000],
                      backgroundColor: ["rgba(33, 205, 154, 0.59)"],
                      borderColor: ["#21CD9A"],
                      borderWidth: 3
                    }
                  ]
                }}
                height={400}
                width={600}
                options={{
                  maintainAspectRatio: false,
                  tension: 0.4,
                  scales: {
                    yAxes: [
                      {
                        ticks: {
                          beginAtZero: true,
                          stepSize: 200000
                        }
                      }
                    ],
                    xAxes: [
                      {
                        gridLines: {
                          drawBorder: false,
                          display: false
                        }
                      }
                    ]
                  }
                }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Card className="pb-4">
            <Link className="text-success" to="/all-users">
              <h6 className="m-3">PROJECTS STATISTICS</h6>
              <Row>
                <Col lg={12}>
                  <Doughnut
                    data={{
                      labels: ["Default", "Engaged", "Active"],
                      datasets: [
                        {
                          label: "LOAN STATISTICS",
                          data: [50, 300, 234],
                          backgroundColor: ["#EC2121", "#17A101", "#FAB400"],
                          borderColor: ["transparent"],
                          borderWidth: 1
                        }
                      ]
                    }}
                    height={200}
                    width={300}
                    options={{
                      maintainAspectRatio: false,
                      cutout: 65
                    }}
                  />
                </Col>
              </Row>
            </Link>
          </Card>
        </Col>
        <Col lg={6}>
          <Card className="pb-4">
            <Link className="text-success" to="/all-users">
              <h6 className="m-3">PROJECTS STATISTICS</h6>
              <Row>
                <Col lg={12}>
                  <Doughnut
                    data={{
                      labels: ["Default", "Engaged", "Active"],
                      datasets: [
                        {
                          label: "LOAN STATISTICS",
                          data: [50, 300, 234],
                          backgroundColor: ["#EC2121", "#17A101", "#FAB400"],
                          borderColor: ["transparent"],
                          borderWidth: 1
                        }
                      ]
                    }}
                    height={200}
                    width={300}
                    options={{
                      maintainAspectRatio: false,
                      cutout: 65  
                    }}
                  />
                </Col>
              </Row>
            </Link>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                    <th>Table heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Home
