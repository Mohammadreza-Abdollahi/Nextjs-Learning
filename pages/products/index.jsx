import Link from "next/link";

const ProductsIndex = () => {
    return ( 
        <>
            <h1>Products!</h1>
            <ul>
                <li>
                    <Link href={`products/${1}`}>Product One</Link>
                </li>
                <li>
                    <Link href={`products/${2}`}>Product Two</Link>
                </li>
                <li>
                    <Link href={`products/${3}`}>Product Three</Link>
                </li>
            </ul>
        </>
     );
}
 
export default ProductsIndex;