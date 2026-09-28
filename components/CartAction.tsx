"use client"
import { useState } from "react"; 
import SizeSelector from "./SizeSelector";
import { Product } from "@/app/api/products/[productid]/productdetails";
import CartCounter from "./CartCounter";
import { CartItem, useCart } from "@/context/CartContext";
export default function CartAction({ product }: { product: Product }){

    const [selectedSize,setSelectedSize] =useState<number|null>(null);
    const[quantity,setQuantity] =useState<number>(0);
    const {addItem} =useCart();

    const item : CartItem = {
        id:product.id,
        name:product.name,
        size:selectedSize,
        quantity:quantity
    }

    return(
        <div className="flex flex-col">
        <SizeSelector sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}></SizeSelector>

        <div className="flex flex-row">
        <CartCounter quantity={quantity} setQuantity={setQuantity}></CartCounter>

        <button className=" flex-1 rounded-full border px-4 py-2 border-[#A85865] bg-[#A85865] text-[#F7ECE9]"
        onClick={()=>addItem(item)}
        >add to cart</button>
        </div>
        

        </div>
    )

}