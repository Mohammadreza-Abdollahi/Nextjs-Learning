const CarItemPage = ({params}) => {
  return (
    <>
      <div style={{margin:"auto",marginTop:140,marginBottom:50,width: 350}}>
        <div className="single-featured-cars">
          <div className="featured-img-box">
            <div className="featured-cars-img">
              <img src={`/assets/images/featured-cars/fc${params.carId}.png`} alt="cars" />
            </div>
            <div className="featured-model-info">
              <p>
                model: 2017
                <span className="featured-mi-span"> 3100 mi</span>
                <span className="featured-hp-span"> 240HP</span>
                automatic
              </p>
            </div>
          </div>
          <div className="featured-cars-txt">
            <h2>
              <a href="#">
                lamborghini <span>v520</span>
              </a>
            </h2>
            <h3>$125,250</h3>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItemPage;
