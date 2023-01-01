import "./Login.css";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleLogin(e) {
    // Send a POST request to the server with the email and password
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // If the login was successful, store the user's information in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // Redirect the user to the dashboard
        this.props.history.push("/");
      })
      .catch((error) => {
        // If there was an error, display an error message
        this.setState({
          error: "Invalid email or password",
        });
      });
    // e.preventDefault();

    // try {
    //   setError("");
    //   setLoading(true);
    //   await login(emailRef.current.value, passwordRef.current.value);
    //   history.push("/");
    // } catch {
    //   setError("Failed to log in");
    // }

    setLoading(false);
  }

  return (
    <div className="login">
      <Form className="login-form" onSubmit={handleLogin}>
        <h2>عalegny Shokran</h2>
        <h3>Login</h3>
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
          <Button disabled={loading} variant="primary" type="submit">
            Login
          </Button>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
