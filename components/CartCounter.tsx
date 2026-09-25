"use client"

import { useState } from "react";

export default function CartCounter(){
    const [count,setCount] = useState(0);

    return(
<div className="">
    <button onClick={()=>setCount((current)=>current+1)}>+</button>
    <span>{count}</span>
    <button  onClick={() =>
          setCount((current) => Math.max(0, current - 1))
        }>-</button>
</div>
    )
}