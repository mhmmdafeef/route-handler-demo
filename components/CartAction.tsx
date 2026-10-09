"use client"
import { useState } from "react"; 
import Image from "next/image";
import SizeSelector from "./SizeSelector";
import { Product } from "@/app/api/products/[productid]/productdetails";
import CartCounter from "./CartCounter";
import { CartItem, useCart } from "@/context/CartContext";
export default function CartAction({ product }: { product: Product }){

    const [selectedSize,setSelectedSize] =useState<number|null>(product.sizes[0] ?? null);
    const[quantity,setQuantity] =useState<number>(1);
    const {addItem} =useCart();

    const item : CartItem = {
        id:product.id,
        name:product.name,
        size:selectedSize,
        quantity:quantity
    }

    return(
        <div className="flex flex-col gap-3 ">
        <SizeSelector sizes={product.sizes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}></SizeSelector>

        <div className="flex flex-row gap-3 ">
        <CartCounter quantity={quantity} setQuantity={setQuantity}></CartCounter>

                <button
                    className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-[#a85865] bg-[#a85865] px-5 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#713d4b] disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={selectedSize === null || quantity < 1}
                    onClick={() => addItem(item)}
                >
                    <Image src="/shopping-bag.png" alt="" width={13} height={13} className="brightness-0 invert" />
                    Add to bag
                </button>
        </div>
        

        </div>
    )

}