import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Carousel.css";

const cards = [
  {
    image:
      "https://www.57357.org/app/uploads/2019/11/10-2.jpg",
    title: "HealthCare",
    description: "Donate to 57357",
  },
  {
    image:
      "https://cdn.winknews.com/wp-content/uploads/2019/04/Medicaid-documents.-Credit-CBS.jpg",
    title: "HealthCare",
    description: "Find The Best Doctor Nearby You",
  },
  {
    image:
      "https://i.pinimg.com/564x/a0/67/63/a06763dcffea9ba1c93097f3feda3f7b.jpg",
    title: "HealthCare",
    description: "Find The Best Doctor Nearby You",
  },
  {
    image:
      "https://1.bp.blogspot.com/-c4u0QHDsjiU/YB_dcElW-hI/AAAAAAAArLI/cE3dieqdUIcJ_Yz2QWEr4tq7Xolx6APbACLcBGAsYHQ/s1542/%25D9%2588%25D8%25B8%25D8%25A7%25D8%25A6%25D9%2581-%25D9%2585%25D8%25B3%25D8%25AA%25D8%25B4%25D9%2581%25D9%258A-%25D8%25A8%25D9%2587%25D9%258A%25D8%25A9.jpg",
    title: "HealthCare",
    description: "Donate to Baheya Hospital",
  },
  {
    image:
      "https://i.pinimg.com/564x/7e/bd/a1/7ebda105b5f6a3579b23e113225729fc.jpg",
    title: "HealthCare",
    description: "Find The Best Doctor Nearby You",
  },
];

const Car = () => {
  return (
    <Carousel interval={3000} className="nav-carousel">
      {cards.map((card) => (
        <Carousel.Item className="bannerCarousel">
          <img
            className="d-block w-100 carouselImage mx-auto"
            src={card.image}
            alt="First slide"
          />
          <Carousel.Caption className="nav-carousel-caption">
            <h4 className=" fw-bolder">{card.title}</h4>
            <h1 className="display-2 fw-bolder">
              {card.description}
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item className="bannerCarousel">
        <img
          className="d-block w-100 carouselImage mx-auto"
          src="https://cdn.winknews.com/wp-content/uploads/2019/04/Medicaid-documents.-Credit-CBS.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="nav-carousel-caption">
          <h4 className=" fw-bolder">HealthCare</h4>
          <h1 className="display-2 fw-bolder">
            Find The Best <br /> Doctor Nearby You
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bannerCarousel">
        <img
          className="d-block w-100 carouselImage mx-auto"
          src="https://i.pinimg.com/564x/a0/67/63/a06763dcffea9ba1c93097f3feda3f7b.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="nav-carousel-caption">
          <h4 className=" fw-bolder">HealthCare</h4>
          <h1 className="display-2 fw-bolder">
            Find The Best <br /> Doctor Nearby You
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bannerCarousel">
        <img
          className="d-block w-100 carouselImage mx-auto"
          src="https://i.pinimg.com/564x/7e/bd/a1/7ebda105b5f6a3579b23e113225729fc.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="nav-carousel-caption">
          <h4 className=" fw-bolder">HealthCare</h4>
          <h1 className="display-2 fw-bolder">
            Find The Best <br /> Doctor Nearby You
          </h1>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Car;
