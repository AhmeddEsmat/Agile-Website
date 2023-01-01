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
import { AuthProvider } from "./Contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/services" component={Services} />
            <PrivateRoute path="/donate" component={Donate} />
            <PrivateRoute path="/creditcard" component={CreditCard} />
            <PrivateRoute path="/fawry" component={Fawry} />
            <PrivateRoute path="/items" component={Items} />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/dental" component={Dental} />
            <PrivateRoute path="/mental" component={Mental} />
            <PrivateRoute path="/eye" component={Eye} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
