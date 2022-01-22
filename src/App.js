import CardList from "./cards-list/CardList";
import CardOne from "./cards-list/CardOne";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./styles.css";

const cardData = {
  id: 1,
  title: "Beautiful Cove",
  address: "56 Forest View Dr, San Francisco, CA 94132",
  imgUrl: "room-image-1.jpg",
  bedrooms: 2,
  baths: 1,
  guests: 1,
  featured: true,
  price: 175.0,
  hostedBy: "John Anda"
};

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex">
              <CardOne data={cardData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
