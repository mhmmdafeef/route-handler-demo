// components/PerfumeCard.tsx

import Image from "next/image";
import Link from "next/link"

interface PerfumeCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function Card({
  id,
  name,
  description,
  price,
  image,
}: PerfumeCardProps) {

  return (
    <Link
      href={`/products/${id}`}
      className="group block w-full max-w-sm overflow-hidden rounded-sm border border-[#ead5d9] bg-[#fffaf9] shadow-[0_8px_28px_rgba(94,49,60,0.07)] transition duration-300 hover:border-[#c9959f] hover:shadow-[0_14px_36px_rgba(94,49,60,0.13)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9f4f62]"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-[#f8e8eb]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 33vw, 85vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a45c6c]">
          Amal Fragrance
        </p>
        <h3 className="mt-2 font-heading text-2xl font-medium text-[#5e313c]">
          {name}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-[#8c6870]">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ead5d9] pt-4">
          <span className="font-heading text-xl font-medium text-[#5e313c]">
            AED {price}
          </span>

          <span
            className="inline-flex min-h-10 items-center justify-center bg-[#9f4f62] px-4 text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors group-hover:bg-[#713d4b]"
          >
            View Product
          </span>
        </div>
      </div>
    </Link>
  );
}