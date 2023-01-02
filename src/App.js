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
import { useNavigate } from "react-router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [error, setError] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Login} />
          <Route path="/login" element={Home} />
          <Route path="/services" element={Services} />
          <Route path="/donate" element={Donate} />
          <Route path="/creditcard" element={CreditCard} />
          <Route path="/fawry" element={Fawry} />
          <Route path="/items" element={Items} />
          <Route path="/about" element={About} />
          <Route path="/dental" element={Dental} />
          <Route path="/mental" element={Mental} />
          <Route path="/eye" element={Eye} />
          <Route path="/" element={Login} />
          <Route path="/signup" element={Signup} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
