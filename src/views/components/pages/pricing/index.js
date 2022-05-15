import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import './pricing.css'
import basic from '../../../../assets/images/basic.svg'
import standard from "../../../../assets/images/standard.svg"
import enterprise from "../../../../assets/images/enterprise.svg"
import free from "../../../../assets/images/free-trial.svg"


const Pricing = () => {
  return (
    <div className="p-4">
      <Row className="my-5 text-center">
        <Col>
          <h1 className="center">Pricing Plans</h1>
          <p>
            All plans include 40+ advanced tools and features to boost your
            product. Choose the best plan to fit your needs.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col lg={4} className="text-center">
          <Card>
            <CardBody>
              <img
                src={basic}
                alt="basic-pricing"
                className="img-fluid my-3"
                width="50"
              />
              <h2>Basic</h2>
              <p className="my-3">A simple start for everyone</p>
              <p>
                <sup className="currency">$</sup>{" "}
                <span className="price">0</span> /month
              </p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} className="text-center">
          <Card>
            <CardBody>
              <img
                src={standard}
                alt="standard-pricing"
                className="img-fluid my-3"
                width="50"
              />
              <h2>Standard</h2>
              <p className="my-3">A simple start for everyone</p>
              <p>
                <sup className="currency">$</sup>{" "}
                <span className="price">49</span> /month
              </p>
              <p className="my-3">Unlimited responses</p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4} className="text-center">
          <Card>
            <CardBody>
              <img
                src={enterprise}
                alt="enterprise-pricing"
                className="img-fluid my-3"
                width="50"
              />
              <h2>Enterprise</h2>
              <p className="my-3">A simple start for everyone</p>
              <p>
                <sup className="currency">$</sup>{" "}
                <span className="price">99</span> /month
              </p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
              <p className="my-3">100 responses a month</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className='free-trial'>
        <Col lg={7}>
          <h1 className='text-white mt-5'>Still not convinced? Start with a 14-day <br /> basic trial!</h1>
          <p className='text-light'>You will get full access to with all the features for 14 days.</p>
        </Col>
        <Col lg={5}>
          <img
            src={free}
            alt="basic"
            className="img-fluid"
          />
        </Col>
      </Row>
    </div>
  )
}

export default Pricing