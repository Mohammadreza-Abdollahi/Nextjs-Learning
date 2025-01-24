import { useRouter } from "next/router";

const Details = () => {
    const {query} = useRouter()
    console.log(query);
    return ( 
        <>
            <h3>Product : {query.productId}</h3>
            <h5>{query.details}</h5>
        </>
     );
}
 
export default Details;