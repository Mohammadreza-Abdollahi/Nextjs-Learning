import { formatNumber } from "@/app/layout";

export const generateMetadata = ({params , searchParams})=>{
  return {
    title : `Car Number ${params.carId}`
  }
}
const CarItemPage = ({params , searchParams}) => {
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
                model: {searchParams.model ? searchParams.model : 'Undefined'}
                <span className="featured-mi-span"> 3100 mi</span>
                <span className="featured-hp-span"> 240HP</span>
                automatic
              </p>
            </div>
          </div>
          <div className="featured-cars-txt">
            <h2>
                {searchParams.name ? searchParams.name : "Undefined"}
            </h2>
            <h3>$ {searchParams.price ? formatNumber(searchParams.price) : "Undefined"}</h3>
            <p>
              {searchParams.description ? searchParams.description : "Undefined"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarItemPage;
