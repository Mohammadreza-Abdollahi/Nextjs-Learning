import { useRouter } from "next/router";

const SubCategoryItem = () => {
    const router = useRouter()
    const {categoryId} = router.query
    console.log(categoryId);
    return ( 
        <>
            <h1>SubCategory from Category : {categoryId}</h1>
        </>
     );
}
 
export default SubCategoryItem;