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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { AuthProvider } from "./Contexts/AuthContext";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/donate" component={Donate} />
            <Route path="/creditcard" component={CreditCard} />
            <Route path="/fawry" component={Fawry} />
            <Route path="/items" component={Items} />
            <Route path="/about" component={About} />
            <Route path="/dental" component={Dental} />
            <Route path="/mental" component={Mental} />
            <Route path="/eye" component={Eye} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;