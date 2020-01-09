import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import app from './base';
import { Link } from 'react-router-dom';
import { Container, Row, Form, Button } from 'react-bootstrap';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <>
      <Container>
        <Row className="justify-content-center my-5">
          <h1>Sign Up</h1>
        </Row>
        <Row className="justify-content-center">
          <Form onSubmit={handleSignUp}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        </Row>
        <Row className="justify-content-center my-5">
          <div className="sign-up">
            <Link to="/signup">Or create an account</Link>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(SignUp);
