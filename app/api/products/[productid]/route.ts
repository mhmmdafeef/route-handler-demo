import { error } from "console";
import { products } from "./productdetails";

export async function GET(request:Request,
    {params}:{params:Promise<{productid:string}>}
) {


const {productid} = await params;

console.log(productid)



const product = products.find((product)=>{
    return product.id === productid
    
});

if(!product){
    return Response.json({
        error: "Product not found"},
        {status:404
    });
}

console.log(product);

return Response.json(product);

}