import Card from "@/components/Card";
import { products } from "@/app/api/products/[productid]/productdetails";

export default function BestsellersPage() {
  return (
    <div className="flex gap-3 bg-[#f8e8eb] px-2 py-4">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.images[0]}
        />
      ))}
    </div>
  );
}