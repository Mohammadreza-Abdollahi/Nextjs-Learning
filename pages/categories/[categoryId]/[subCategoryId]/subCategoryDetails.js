import { useRouter } from "next/router";

const SubCategoryDetails = () => {
    const router = useRouter()
    const {categoryId} = router.query
    console.log(categoryId);
    return ( 
        <>
            <h1>SubCategory Detail from Category : {categoryId}</h1>
        </>
     );
}
 
export default SubCategoryDetails;