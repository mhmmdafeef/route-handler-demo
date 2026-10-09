import { Product, products } from "@/app/api/products/[productid]/productdetails";
import ProductExperience from "@/components/ProductExperience";
import { notFound } from "next/navigation";


export default async function ProductPage({params}:{
    params:Promise<{productId:string;}>;

}){

    const productname =  (await params).productId

    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : process.env.APP_URL ?? "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/products/${encodeURIComponent(productname)}`);

    if(!response.ok){
        notFound();
    }

    const requestedProduct: Product = await response.json();
    const amberProduct = products.find((item) => item.id === "amal-amber");

    if (!amberProduct || !requestedProduct) {
        notFound();
    }

 
    const recommendations = products.filter((item) => item.id !== amberProduct.id).slice(0, 4);

    return <ProductExperience product={requestedProduct} recommendations={recommendations} />;
}