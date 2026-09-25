import { Product } from "@/app/api/products/[productid]/productdetails";
import CartCounter from "@/components/CartCounter";

export default async function ProductPage({params}:{
    params:Promise<{productId:string;}>;

}){

    const productname =  (await params).productId

    const response = await fetch (`http://localhost:3000/api/products/${productname}`);

    const product : Product = await response.json();

    
    return(
        <div className="flex bg-[#F7ECE9]  py-6 px-6 gap-20">
            
            <img src = "/Gemini_Generated_Image_snycj8snycj8snyc.jpeg"></img>
            <div className="text-[#5e313c] flex flex-col gap-2 py-2 ">
            <span className="text-[#A85865] text-1xl">BEST SELLER</span>
            <h1 className="text-5xl">{product.name}</h1>
            <span>A timeless fragrance for her</span>
            <p>{product.detailedDescription}</p>
            <span>select size</span>
            <div className = "flex flex-row gap-2 ">
            {product.sizes.map((size)=>
                <button className="bg-[#A85865] rounded-2xl w-20 text-amber-50" >{size}</button>
            )} 
            </div>
            <CartCounter/>
            
           </div>
        
        </div>
        
    );
}