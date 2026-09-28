"use client"

import { useState,createContext,useContext  } from "react";


export type CartItem = {
    id: string;
    name:string;
    quantity:number;
    size:number|null;
};

type CartContextType = {
    items : CartItem[];
    addItem : (item:CartItem) =>void;
    removeItem:(id:string)=>void;
    totalItems:number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children} :{children:React.ReactNode}){
    const [items,setItems] =useState<CartItem[]>([]);

    function addItem(item:CartItem){
        setItems((currentItems)=>[...currentItems,item]);
    }

    function removeItem(id:string){
        setItems((currentItems)=>currentItems.filter((item)=>
        item.id!=id));
    }

    const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
     <CartContext.Provider
      value={{ items, addItem, removeItem, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
  
  export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}


