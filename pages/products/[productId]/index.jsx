import Link from "next/link";
import { useRouter } from "next/router";

const Product = () => {
    const {query} = useRouter()
    console.log(query);
    return ( 
        <>
            <h1>This is Product : {query.productId}</h1>
            <h3><Link href={{
                pathname: `${query.productId}/details`,
                query: {details: `this details for product number : ${query.productId}`}
            }}>Details</Link></h3>
        </>
     );
}
 
export default Product;