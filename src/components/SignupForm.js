import React, { useRef, useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export const SignupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleFormClose = () => setShowForm(false);
  const handleFormOpen = () => setShowForm(true);
  const { signup } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordCmfRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');

    if (passwordRef.current.value.length < 6) {
      return setError('Your password is too short like me...');
    }

    if (passwordRef.current.value !== passwordCmfRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      setMsg('Account created');
    } catch {
      setError('Failed to create an account');
    }
  };

  return (
    <>
      <div onClick={handleFormOpen} className="btn btn-outline-secondary mx-2">
        Signup
      </div>
      <Modal centered show={showForm} onHide={handleFormClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            {msg && <Alert variant="success">{msg}</Alert>}
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" required ref={passwordCmfRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleFormClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
