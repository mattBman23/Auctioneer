import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export const LoginForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const { login } = useAuth();

  const handleFormClose = () => setShowForm(false);
  const handleFormOpen = () => setShowForm(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    setError('');

    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Invalid infos');
    }
  };

  return (
    <>
      <div onClick={handleFormOpen} className="btn btn-outline-secondary mx-2">
        Login
      </div>
      <Modal centered show={showForm} onHide={handleFormClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleFormClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
