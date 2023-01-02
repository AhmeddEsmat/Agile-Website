import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Services from "./Components/Services";
import Donate from "./Components/Donate";
import CreditCard from "./Components/CreditCard";
import Fawry from "./Components/Fawry";
import Items from "./Components/Items";
import About from "./Components/About";
import Dental from "./Components/Dental";
import Mental from "./Components/Mental";
import Eye from "./Components/Eye";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      setError("");
      setLoading(true);
      const response = await axios.post("https://agile-server.onrender.com/getUser", {
        email: emailRef.current.value,
        password: passwordRef.current.value
      });
      if (response.data.success) {
        history.push("/");
        console.log(response.data);
      } else {
        setError("Failed to log in");
      }
    } catch {
      setError("Failed to log in");
    }
  
    setLoading(false);
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <Home /> : <Redirect to="/login" />}
          </Route>
          <Route path="/services">
            {isLoggedIn ? <Services /> : <Redirect to="/login" />}
          </Route>
          <Route path="/donate">
            {isLoggedIn ? <Donate /> : <Redirect to="/login" />}
          </Route>
          <Route path="/creditcard">
            {isLoggedIn ? <CreditCard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/fawry">
            {isLoggedIn ? <Fawry /> : <Redirect to="/login" />}
          </Route>
          <Route path="/items">
            {isLoggedIn ? <Items /> : <Redirect to="/login" />}
          </Route>
          <Route path="/about">
            {isLoggedIn ? <About /> : <Redirect to="/login" />}
          </Route>
          <Route path="/dental">
            {isLoggedIn ? <Dental /> : <Redirect to="/login" />}
          </Route>
          <Route path="/mental">
            {isLoggedIn ? <Mental /> : <Redirect to="/login" />}
          </Route>
          <Route path="/eye">
            {isLoggedIn ? <Eye /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" render={() => <Login handleLogin={handleLogin} />} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
