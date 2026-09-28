"use client"

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartCounter({
    quantity,
    setQuantity,
}: {
    quantity: number ;
    setQuantity: (value: number | ((current: number) => number)) => void;
}){
   




    return(
<div className="border-[#A85865] border-2 rounded-2xl inline-flex w-fit py-1 px-1">
    <button className="min-w-10 px-3 py-1" onClick={()=>
        setQuantity((current)=>current+1)}
    
        >+</button>
    <span className="min-w-12 py-1 text-center">{quantity}</span>
    <button className="min-w-10 px-3 py-1" onClick={() =>
          setQuantity((current) => Math.max(0, current - 1))
        }>-</button>
</div>
    )
}