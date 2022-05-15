import React from "react"
import { ChevronLeft } from "react-feather"
import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardTitle, Form, Input, Label } from "reactstrap"

const ForgotPassword = () => {
  return (
    <div className="auth-wrapper auth-cover">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <Card className="m-5">
              <CardBody>
                <CardTitle className="text-center">Forgot Password?</CardTitle>
                <p>
                  Enter your email and we'll send you instructions to reset your
                  password
                </p>
                <Form className="auth-forgot-password-form mt-2">
                  <div className="mb-1">
                    <Label className="form-label" for="login-email">
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="login-email"
                      placeholder="john@example.com"
                      autoFocus
                    />
                  </div>
                  <Button color="primary" block>
                    Send reset link
                  </Button>
                </Form>
                <p className="text-center mt-2">
                  <Link to="/login">
                    <ChevronLeft className="rotate-rtl me-25" size={14} />
                    <span className="align-middle">Back to login</span>
                  </Link>
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
