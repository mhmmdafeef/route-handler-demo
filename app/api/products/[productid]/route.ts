import { products } from "./productdetails";

export async function GET(request:Request,
    {params}:{params:Promise<{productid:string}>}
) {


const {productid} = await params;

console.log(productid)



const product = products.find((product)=>{
    product.name === productid
    return product;
});

console.log(product);

return Response.json(product);

}