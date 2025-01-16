import { useRouter } from "next/router";

const CategoryItem = () => {
    const router = useRouter()
    const {categoryId} = router.query
    console.log(categoryId);
    return ( 
        <>
            <h1>Category : {categoryId}</h1>
        </>
     );
}
 
export default CategoryItem;