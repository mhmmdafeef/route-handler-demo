"use client"

import { useState } from "react";
import Cta from "./Cta";

type SizeSelectorProps = {
    sizes:number[];
    selectedSize:number | null;
    setSelectedSize:React.Dispatch<React.SetStateAction<number |null>>;
}

export default function SizeSelector({ sizes ,selectedSize,setSelectedSize}:SizeSelectorProps) {


  return (
    <div className=" flex flex-row gap-2">
      {sizes.map(size => (
        <Cta
          key={size}
          text={size}
          classname={`w-20 rounded-full border px-4 py-2 transition ${
            selectedSize === size
              ? "border-[#A85865] bg-[#A85865] text-[#F7ECE9]"
              : "border-[#A85865] bg-transparent text-[#5e313c] hover:bg-[#E8C8C5]"
          }`}
          handlerfunction={() => setSelectedSize(size)}
        />
      ))}
    </div>
  );
}