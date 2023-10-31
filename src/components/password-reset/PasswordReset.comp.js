import React from 'react';
import PropTypes from 'prop-types';
import { Card, FloatingLabel, Form, Button } from 'react-bootstrap';

const PasswordReset = ({ handleOnchange, Email, handleOnResetsubmit, formSwitcher }) => {
  return (
    <Card style={{ width: '18rem', height: '20rem' }}>
      <Card.Body>
        <Card.Text>Reset Password</Card.Text>
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
        <Form onSubmit={handleOnResetsubmit}>
          <br></br>
          <Button type="submit">Reset</Button>
        </Form>
        <Card.Link href="#!" onClick={() => formSwitcher('login')}>
          Login now?
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

PasswordReset.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  Email: PropTypes.string.isRequired,
  handleOnResetsubmit: PropTypes.func.isRequired,
};

export default PasswordReset;
