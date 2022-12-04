import "./Home.css";
import app from "../firebase";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
        <Navbar />
        <Carousel />
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
