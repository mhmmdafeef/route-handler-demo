// components/PerfumeCard.tsx

import Image from "next/image";
import Link from "next/link"

interface PerfumeCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Card({
  name,
  description,
  price,
  image,
}: PerfumeCardProps) {

  return (
    <Link href={`/products/${name.toLowerCase().replaceAll(" ", "-")}`}>
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-wide text-gray-900">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">
            AED {price}
          </span>

          <button
            type="button"
            className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            View Product
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}