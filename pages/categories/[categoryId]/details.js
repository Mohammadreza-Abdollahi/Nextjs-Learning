import { useRouter } from "next/router";

const CategoryItemDetails = () => {
    const router = useRouter()
    const {categoryId} = router.query
    console.log(categoryId);
    return ( 
        <>
            <h1>Details from item : {categoryId}</h1>
        </>
     );
}
 
export default CategoryItemDetails;