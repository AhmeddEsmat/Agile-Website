import "./Login.css";
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
// import { useAuth } from "../Contexts/AuthContext";
import axios from "axios";

const Login = ({handleLogin}) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // async function handleLogin(e) {
  //   e.preventDefault();
  
  //   try {
  //     setError("");
  //     setLoading(true);
  //     const response = await axios.post("https://agile-server.onrender.com/getUser", {
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value
  //     });
  //     // login(response.data.token, response.data.user);
  //     history.push("/");
  //   } catch {
  //     setError("Failed to log in");
  //   }
  
  //   setLoading(false);
  // }

  function handleSubmit() {
    handleLogin(emailRef.current.value, passwordRef.current.value);
  }

  function handleLogin(e) {
    e.preventDefault();
  
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  
    axios.post("https://agile-server.onrender.com/getUser", { email, password })
      .then(response => {
        // handle successful login
        console.log(response);
        history.push('/'); 
      })
      .catch(error => {
        // handle login error
        console.log(error);
      });
  }
  

  return (
    <div className="login">
      <Form className="login-form" onSubmit={handleSubmit}>
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
