import { Product, products } from "@/app/api/products/[productid]/productdetails";
import ProductExperience from "@/components/ProductExperience";
import { headers } from "next/headers";
import { notFound } from "next/navigation";


export default async function ProductPage({params}:{
    params:Promise<{productId:string;}>;

}){

    const productname =  (await params).productId

    const requestHeaders = await headers();
    const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
    const protocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0]
        ?? (process.env.VERCEL_URL ? "https" : "http");
    const baseUrl = host
        ? `${protocol}://${host}`
        : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : process.env.APP_URL ?? "http://localhost:3000";

    const cookie = requestHeaders.get("cookie");
    const response = await fetch(
        `${baseUrl}/api/products/${encodeURIComponent(productname)}`,
        { headers: cookie ? { cookie } : undefined }
    );

    if(!response.ok){
        notFound();
    }

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
        throw new Error(
            `Expected JSON from ${response.url}, received ${contentType ?? "unknown content type"} (HTTP ${response.status})`
        );
    }

    const requestedProduct: Product = await response.json();
    const amberProduct = products.find((item) => item.id === "amal-amber");

    if (!amberProduct || !requestedProduct) {
        notFound();
    }

 
    const recommendations = products.filter((item) => item.id !== amberProduct.id).slice(0, 4);

    return <ProductExperience product={requestedProduct} recommendations={recommendations} />;
}