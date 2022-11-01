import "./Signup.css";
import { Button, Form, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../Contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSignup(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="signup">
      <Form className="signup-form" onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
          <Form.Control
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
            required
          />
          <Form.Control
            type="password"
            placeholder="Enter password again"
            ref={passwordConfirmRef}
            required
          />
          <Button disabled={loading} variant="primary" type="submit">
            Sign Up
          </Button>
        </Form.Group>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
