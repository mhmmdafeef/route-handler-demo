import Link from "next/link"
import { bestsellers } from "./products"
import Card from "@/components/Card"
export default function bestsellerpage()

{

  return(
     
    <div className="bg-[#f8e8eb]  flex gap-3 px-2 py-4">
    {bestsellers.map((perfume) => (
  <Card
    key={perfume.name}
    name={perfume.name}
    description={perfume.description}
    price={perfume.price}
    image={perfume.image}
  />
))}</div>
)
}