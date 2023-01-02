import "./Home.css";
// import app from "../firebase";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Option from "./Option";
import Procedure from "./Procedure";
import Blog from "./Blog";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Option />
      <Procedure />
      <Blog />
      <Footer />
      {/* <button onClick={() => app.auth().signOut()}>Sign Out</button> */}
    </div>
  );
};

export default Home;
