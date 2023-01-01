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
    name: "Medical 5",
    url: "https://picsum.photos/200/300",
    description: "This is a medical item",
    price: "$100",
  },
  {
    id: 6,
    name: "Medical 6",
    url: "https://picsum.photos/200/300",
    description: "This is a medical item",
    price: "$100",
  },
  {
    id: 7,
    name: "Medical 7",
    url: "https://picsum.photos/200/300",
    description: "This is a medical item",
    price: "$100",
  },
  {
    id: 8,
    name: "Medical 8",
    url: "https://picsum.photos/200/300",
    description: "This is a medical item",
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
