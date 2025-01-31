import Link from "next/link";
import { formatNumber } from "../layout";

export const metadata = {
  title: "Shop | Cars",
};
const cars = [
  {
    id: 1,
    model: 2017,
    name: "BMW 6-series gran coupe",
    price: 89395,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    id: 2,
    model: 2019,
    name: "Chevrolet Camaro WMV20",
    price: 66575,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    id: 3,
    model: 2018,
    name: "Lamborghini V520",
    price: 125250,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    id: 4,
    model: 2019,
    name: "Audi A3 Sedan",
    price: 95500,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    id: 5,
    model: 2021,
    name: "Infiniti Z5",
    price: 36850,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
  {
    id: 6,
    model: 2019,
    name: "Porsche 718 Cayman",
    price: 48500,
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.",
  },
];
const CarsPage = () => {
  return (
    <>
      <section
        id="featured-cars"
        className="featured-cars main-cont"
        style={{ marginTop: 50 }}
      >
        <div className="container">
          <div className="section-header">
            <p>
              checkout <span>the</span> featured cars
            </p>
            <h2>featured cars</h2>
          </div>
          {cars.map((item, index) => (
            <div className="featured-cars-content cars-item" key={index}>
                  <div className="single-featured-cars">
                    <div className="featured-img-box">
                      <div className="featured-cars-img">
                        <img
                          src={`assets/images/featured-cars/fc${item.id}.png`}
                          alt="cars"
                        />
                      </div>
                      <div className="featured-model-info">
                        <p>model: {item.model}</p>
                      </div>
                    </div>
                    <div className="featured-cars-txt">
                      <h2>
                        <Link className="name-link" href={`/cars/${item.id}?model=${item.model}&name=${item.name}&price=${item.price}&description=${item.description}`}>{item.name}</Link>
                      </h2>
                      <h3>$ {formatNumber(item.price)}</h3>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CarsPage;
