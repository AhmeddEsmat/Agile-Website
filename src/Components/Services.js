import "./Services.css";
import Navbar from "./Navbar";
import Medical from "./Medical";
import Footer from "./Footer";

const Items = [
  {
    id: 1,
    name: "Panadol Advance",
    url: "https://dkud4u09qff41.cloudfront.net/Products/ac84b8ac-e0e8-45e8-827f-7c7a3b0c5aca.jpeg",
    description: "Nonopioid analgesic used as antipyretic, treatment of mild to moderate pain and peri-/postoperative management of pain.",
    price: "$100",
  },
  {
    id: 2,
    name: "Panadol Extra",
    url: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/en_eg/Products/455x455-en%20eg_new.jpg?auto=format",
    description: "Panadol Extra is ideal for those who want the benefits of Panadol, plus a little more pain relieving effect on tough pain like tension type headache, toothache and period pain.",
    price: "$100",
  },
  {
    id: 3,
    name: "Bronchicum® Elixir S",
    url: "https://neseha.com/wp-content/uploads/bronchicum-medicine.jpg",
    description: "Dietary supplement in case of cough.",
    price: "$100",
  },
  {
    id: 4,
    name: "Limitless C 500mg",
    url: "https://cdn.chefaa.com/filters:format(webp)/public/uploads/products/1617011870limitless-c-500mg-20tabletspng",
    description: "Supports the health of the immune system and helps increase the vitality of the body Powerful antioxidant gentle on the stomach",
    price: "$100",
  },
  {
    id: 5,
    name: "DIONA Patient Monitor",
    url: "https://vanninhealthcare.com/wp-content/uploads/2020/08/Diona-ptient-monitor.png",
    description: "Patient monitor is a large 15” TFT LCD screen makes all the waveforms and monitored vital signs easily observable, and helps you to quickly configure your treatment in accordance with the fluctuations.",
    price: "$100",
  },
  {
    id: 6,
    name: "Walker",
    url: "https://images-eu.ssl-images-amazon.com/images/I/51clMcU2rAL._AC_UL600_SR600,600_.jpg",
    description: "An adult walker that easily folds for transportation. Simply press on the button and the walker folds up nicely. A front wheel walker that is very sturdy, stable, and safe, made of 1 round aluminum construction. Supports a 300lb person.",
    price: "$100",
  },
  {
    id: 7,
    name: "Crutches",
    url: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/34/301132/1.jpg?9446",
    description: "Crutches help people who have injuries or illnesses that affect their legs walk. They can be used short term, such as during recovery from an accident or surgery, or long term, such as for a lifelong disability.",
    price: "$100",
  },
  {
    id: 8,
    name: "Thermometer",
    url: "https://m.media-amazon.com/images/I/41UXm+q5JBL.jpg",
    description: "Thermometers measure body temperature which is important in medicine. Many diseases and conditions can create an elevated temperature or fever, which is simply the body's way of fighting an infection.",
    price: "$100",
  }
];

const Services = () => {
  return (
    <>
      <Navbar />
      <h1>Catalog</h1>
      <div className="items">
        {Items.map((medical) => (
          <Medical
            key={medical.id}
            name={medical.name}
            url={medical.url}
            description={medical.description}
            price={medical.price}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Services;
