import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import app from './base.js';
import { AuthContext } from './Auth.js';
import { Container, Row, Button, Form } from 'react-bootstrap';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <h1>Log in</h1>
      </Row>
      <Row className="justify-content-center">
        <Form onSubmit={handleLogin}>
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
          <Button type="submit">Log in</Button>
        </Form>
      </Row>
      <Row className="justify-content-center my-5">
        <div className="sign-up">
          <Link to="/signup">Or create an account</Link>
        </div>
      </Row>
    </Container>
  );
};

export default withRouter(Login);
