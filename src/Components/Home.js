import "./Home.css";
import app from "../firebase";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Option from "./Option";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
        <Option />
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
