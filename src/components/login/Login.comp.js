import React from 'react';
import PropTypes from 'prop-types';
import { Card, FloatingLabel, Form, Button } from 'react-bootstrap';

const Login = ({ handleOnchange, Email, Password, handleOnsubmit, formSwitcher }) => {
  return (
    <Card style={{ width: '18rem', height: '20rem' }}>
      <Card.Body>
        <Card.Text>Client Login</Card.Text>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
          <Form.Control
            type="email"
            onChange={handleOnchange}
            name="Email"
            placeholder="name@example.com"
            value={Email}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            onChange={handleOnchange}
            name="Password"
            value={Password}
            placeholder="Password"
            required
          />
        </FloatingLabel>
        <Form onSubmit={handleOnsubmit}>
          <br>
        </br>
          <Button type="submit">Log In</Button>
        </Form>
        <Card.Link href="#!" onClick={() => formSwitcher('reset')}>
          Forgot Password?
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

Login.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  Email: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
  handleOnsubmit: PropTypes.func.isRequired,
};

export default Login;
