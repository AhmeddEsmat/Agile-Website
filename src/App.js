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
import PrivateRoute from "./PrivateRoute";
import { useHistory } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (email,password) => {
    axios
      .post("https://expa-server.onrender.com/getAdmin", {
        email: email,
        password: password, 
      })
      .then((response) => {
        console.log(response);
        if (response.data.message == "Successfully logged in.") {
          history.push("/");
        } else {
          setError("Incorrect email or password");
        }
      })
      .catch((err) => console.log(err));
  };
  // const handleLogin = async (email, password) => {
  //   try {
  //     // Send a request to the server to verify the user's email and password
  //     const response = await axios.post(
  //       "https://agile-server.onrender.com/getUser",
  //       {
  //         email: email,
  //         password: password,
  //       }
  //     );
  //     // If the login is successful, update the login status and redirect the user to the home page
  //     if (response.data.message == "Successfully logged in.") {
  //       setIsLoggedIn(true);
  //       history.push("/");
  //     } else {
  //       // If the login is unsuccessful, show an error message
  //       setError("Incorrect email or password");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/services"
            component={Services}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/donate"
            component={Donate}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/creditcard"
            component={CreditCard}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/fawry"
            component={Fawry}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/items"
            component={Items}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/about"
            component={About}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/dental"
            component={Dental}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/mental"
            component={Mental}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/eye"
            component={Eye}
            isAuthenticated={isLoggedIn}
          />
          <Route
            path="/login"
            render={() => <Login handleLogin={handleLogin} />}
          />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
