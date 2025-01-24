import Link from "next/link";

const Index = () => {
    return ( 
        <>
            <h1>Landing Page</h1>
            <ul>
                <li>
                    <Link href={"/products"}>Products</Link>
                </li>
                <li>
                    <Link href={"/about"}>About Us</Link>
                </li>
            </ul>
        </>
    );
}
 
export default Index;