"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/app/api/products/[productid]/productdetails";
import CartAction from "@/components/CartAction";

type ProductExperienceProps = {
  product: Product;
  recommendations: Product[];
};

const noteImages = ["/bergamot-fruit.jpg", "/damask-rose.jpg", "/oud-wood.jpg"];
const noteGroups = [
  { key: "top", label: "Top notes", names: "Bergamot  |  Saffron  |  Cardamom" },
  { key: "heart", label: "Heart notes", names: "Amber  |  Saffron  |  Dark Rose" },
  { key: "base", label: "Base notes", names: "Agarwood (Oud)  |  Patchouli  |  Musk" },
] as const;

const occasionMarks: Record<string, string> = {
  Evening: "☾",
  "Special Occasions": "✳",
  "Everyday Elegance": "♨",
  Gifting: "◇",
};

export default function ProductExperience({ product, recommendations }: ProductExperienceProps) {
  const gallery = [
    product.images[0] || "/amal_amber.jpeg",
    "/Gemini_Generated_Image_snycj8snycj8snyc.jpeg",
    "/656b7c99-525f-47ab-b7f9-51323645e2bd.jpeg",
    "/oud-wood.jpg",
  ];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const noteData = [product.notes.top, product.notes.heart, product.notes.base];
  const description = product.detailedDescription;
  const occasions = product.idealFor.slice(0, 4);

  return (
    <main className="bg-[#fff9f6] text-[#55323a]">
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-5 sm:px-8 lg:px-12 lg:pb-12">
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#987c7e]">
          <Link href="/" className="transition-colors hover:text-[#9d4e60]">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/bestsellers" className="transition-colors hover:text-[#9d4e60]">Shop</Link>
          <span aria-hidden="true">›</span>
          <span className="text-[#6a4c50]">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
          <div className="grid grid-cols-[58px_minmax(0,1fr)] gap-3 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-4">
            <div className="order-2 flex gap-2 overflow-x-auto pb-1 lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Show product image ${index + 1}`}
                  aria-pressed={selectedThumbnail === index}
                  onClick={() => {
                    setActiveImage(image);
                    setSelectedThumbnail(index);
                  }}
                  className={`relative aspect-square w-[58px] shrink-0 overflow-hidden border transition sm:w-[72px] ${selectedThumbnail === index ? "border-[#a25463]" : "border-[#ead8d3] hover:border-[#bd8a91]"}`}
                >
                  <Image src={image} alt="" fill sizes="72px" className="object-cover" />
                </button>
              ))}
            </div>
            <div className="relative order-1 aspect-[0.94] min-w-0 overflow-hidden bg-[#f2dfd9] lg:order-2 lg:aspect-[1.04]">
              <Image
                src={activeImage}
                alt={`${product.name} fragrance bottle`}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-white/90 text-lg text-[#6d5152] shadow-sm" aria-hidden="true">⌕</span>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-[520px] flex-col text-[#55323a] lg:mx-0 lg:pl-1">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.34em] text-[#a25463]">Best seller</p>
            <h1 className="font-heading text-[40px] font-normal leading-[1.05] sm:text-[48px]">{product.name}</h1>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#91777a]">A rich oriental fragrance for her</p>
            <div className="mt-3 flex items-center gap-3 text-xs text-[#725a5b]">
              <span className="tracking-[0.12em] text-[#a45c55]" aria-label={`${product.rating} out of 5 stars`}>★★★★★</span>
              <span>{product.rating.toFixed(1)}</span>
              <span className="text-[#bda9a5]">({product.reviewCount} reviews)</span>
            </div>
            <p className="mt-4 font-heading text-[25px]">AED {product.price.toLocaleString("en-AE")}</p>
            <p className="mt-3 max-w-[470px] text-[12px] leading-[1.8] text-[#705b5c]">{description}</p>
            <div className="mt-5 border-t border-[#eadbd7] pt-4">
              <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[#947b7c]">Select size</p>
              <CartAction product={product} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-[#eadbd7] pt-4 text-center text-[9px] leading-4 text-[#806b6c]">
              <div><span className="mb-1 block text-sm text-[#a75a67]">◉</span>Free shipping<br />on orders above AED 300</div>
              <div><span className="mb-1 block text-sm text-[#a75a67]">♧</span>Secure payment<br />100% safe &amp; encrypted</div>
              <div><span className="mb-1 block text-sm text-[#a75a67]">↺</span>Easy returns<br />within 7 days</div>
            </div>
          </div>
        </div>
      </section>

      <section id="fragrance-notes" className="border-y border-[#f0deda] bg-[#fbedeb] px-5 py-8 sm:px-8 lg:py-9">
        <div className="mx-auto max-w-[1180px]">
          <header className="mb-6 text-center">
            <h2 className="font-heading text-[24px]">Fragrance notes</h2>
            <p className="mt-1 text-[9px] uppercase tracking-[0.27em] text-[#9b777a]">A harmonious blend of nature&apos;s finest</p>
          </header>
          <div className="grid gap-5 md:grid-cols-3 md:gap-0">
            {noteGroups.map((group, groupIndex) => (
              <div key={group.key} className={`px-3 text-center md:px-6 ${groupIndex > 0 ? "md:border-l md:border-[#e6cfca]" : ""}`}>
                <div className="mx-auto flex w-fit justify-center -space-x-2">
                  {noteImages.map((image, imageIndex) => (
                    <div key={`${group.key}-${image}`} className="relative size-[62px] overflow-hidden rounded-full border-2 border-[#fbedeb] sm:size-[76px]">
                      <Image src={image} alt={noteData[groupIndex][imageIndex]?.name ?? group.label} fill sizes="76px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#8a6268]">{group.label}</p>
                <p className="mt-1 text-[10px] text-[#755d5e]">{group.names}</p>
                <p className="mt-1 text-[9px] text-[#a08888]">{noteData[groupIndex].map((note) => note.name).join("  ·  ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[#fff9f6] lg:min-h-[330px] lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
          <Image
            src="/656b7c99-525f-47ab-b7f9-51323645e2bd.jpeg"
            alt="Amal fragrance collection arranged among botanical ingredients"
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 right-0 flex w-[46%] flex-col justify-center bg-[#fff9f6]/85 px-5 sm:px-9 lg:hidden">
            <p className="font-heading text-xl italic">More than a fragrance,<br />it&apos;s an aura.</p>
            <p className="mt-3 text-[10px] leading-5 text-[#705b5c]">A warm, enveloping blend made to leave a quietly unforgettable impression.</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-7 py-9 sm:px-12 lg:px-[12%]">
          <p className="text-[9px] uppercase tracking-[0.24em] text-[#a25463]">About the fragrance</p>
          <h2 className="mt-2 font-heading text-[29px] leading-tight">Grace in Every Note</h2>
          <p className="mt-3 text-[11px] leading-[1.9] text-[#705b5c]">Inspired by blossoming gardens and golden resins, {product.name} tells a story of warmth, depth, and quiet confidence. Each note unfolds with a fresh and vibrant touch, while the base leaves a romantic trail that lingers beautifully.</p>
          <Link href="#fragrance-notes" className="mt-5 inline-flex w-fit items-center gap-3 rounded-full bg-[#963f54] px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#713d4b]">The fragrance journey <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="border-y border-[#f0deda] bg-[#fff9f6] px-5 py-7 sm:px-8">
        <div className="mx-auto max-w-[1100px]">
          <header className="mb-5 text-center">
            <h2 className="font-heading text-[22px]">Ideal for</h2>
            <p className="mt-1 text-[9px] uppercase tracking-[0.23em] text-[#9b777a]">Perfect for every moment</p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {occasions.map((occasion, index) => (
              <div key={occasion} className={`px-3 py-2 text-center ${index > 0 ? "md:border-l md:border-[#eadbd7]" : ""}`}>
                <span className="mx-auto grid size-11 place-items-center rounded-full border border-[#dcbfc0] font-heading text-xl text-[#9b5965]" aria-hidden="true">{occasionMarks[occasion] ?? "✧"}</span>
                <h3 className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em]">{occasion}</h3>
                <p className="mt-1 text-[9px] text-[#927b7b]">{["A touch of allure", "Make moments memorable", "Refined and deep", "A timeless expression of love"][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbedeb] px-5 py-4 sm:px-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["Concentration", product.concentration],
            ["Longevity", product.longevity],
            ["Sillage", product.sillage],
            ["Gender", product.gender],
          ].map(([label, value], index) => (
            <div key={label} className={`flex items-center gap-3 ${index > 0 ? "sm:border-l sm:border-[#e5cfcb] sm:pl-5" : ""}`}>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#d8b9bb] font-heading text-sm text-[#9b5965]" aria-hidden="true">{["◉", "⌛", "♨", "♀"][index]}</span>
              <div><p className="text-[8px] uppercase tracking-[0.13em] text-[#977c7d]">{label}</p><p className="mt-1 text-[10px]">{value}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1300px] px-5 py-8 sm:px-8 lg:py-10">
        <header className="mb-5 text-center">
          <h2 className="font-heading text-[23px]">You may also like</h2>
          <p className="mt-1 text-[9px] uppercase tracking-[0.23em] text-[#9b777a]">Complete your fragrance collection</p>
        </header>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {recommendations.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} className="group grid grid-cols-[72px_minmax(0,1fr)] items-center gap-3 bg-[#f8e7e2] p-2 transition-colors hover:bg-[#f1dcd6] sm:grid-cols-[88px_minmax(0,1fr)] sm:p-3">
              <div className="relative aspect-square overflow-hidden bg-[#f2dfd9]">
                <Image src={item.images[0]} alt={item.name} fill sizes="88px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-heading text-[14px] leading-tight">{item.name}</p>
                <p className="mt-1 line-clamp-2 text-[9px] leading-4 text-[#8f7374]">{item.subtitle}</p>
                <p className="mt-2 text-[9px] text-[#67494f]">AED {item.price.toLocaleString("en-AE")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
