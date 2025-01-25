import Image from 'next/image';
const Error404 = () => {
    return ( 
        <>
            <section style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Image src={'/404.png'} alt='Error'  width={1200} height={900}/>
            </section>
        </>
     );
}
 
export default Error404;