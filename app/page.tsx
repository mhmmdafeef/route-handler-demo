import Image from "next/image";
import Link from "next/link";
import Card from "@/components/Card";
import { products } from "@/app/api/products/[productid]/productdetails";

const heroProduct = products[0];
const featuredProducts = products.slice(1, 4);

export default function HomePage() {
	return (
		<main className="flex-1">
			<section className="grid bg-[#f8e8eb] md:grid-cols-2">
				<div className="relative order-first aspect-[16/10] overflow-hidden bg-[#eed3d8] md:order-last md:aspect-auto md:min-h-[min(68svh,700px)]">
					<Image
						src={heroProduct.images[0]}
						alt={`${heroProduct.name} perfume surrounded by roses`}
						fill
						priority
						sizes="(min-width: 768px) 50vw, 100vw"
						className="object-contain"
					/>
				</div>

				<div className="flex items-center px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-16">
					<div className="mx-auto w-full max-w-xl">
						<p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#a45c6c] sm:text-xs">
							Hope in every moment
						</p>
						<h1 className="mt-4 font-heading text-5xl leading-[0.98] text-[#5e313c] sm:text-6xl lg:text-7xl">
							AMAL
							<span className="mt-1 block italic text-[#9f4f62]">Eternal</span>
						</h1>
						<p className="mt-5 max-w-md text-sm leading-7 text-[#795761] sm:text-base">
							{heroProduct.subtitle}. A graceful blend of rose, luminous
							florals, and warm sandalwood.
						</p>
						<p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#a45c6c]">
							{heroProduct.concentration} <span className="px-2">/</span>
							{heroProduct.notes.top.map((note) => note.name).join(" · ")}
						</p>
						<div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
							<Link
								href={`/products/${heroProduct.id}`}
								className="inline-flex min-h-12 items-center justify-center bg-[#9f4f62] px-6 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#713d4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9f4f62]"
							>
								Discover Amal Eternal
							</Link>
							<Link
								href="/bestsellers"
								className="text-xs font-medium uppercase tracking-[0.14em] text-[#713d4b] underline decoration-[#c9959f] underline-offset-4 transition-colors hover:text-[#a45c6c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9f4f62]"
							>
								Explore the collection
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-[#fffaf9] px-6 py-10 sm:py-14 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-wrap items-end justify-between gap-5">
						<div>
							<p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#a45c6c]">
								The collection
							</p>
							<h2 className="mt-2 font-heading text-3xl text-[#5e313c] sm:text-4xl">
								Find your fragrance
							</h2>
						</div>
						<Link
							href="/bestsellers"
							className="pb-1 text-xs font-medium uppercase tracking-[0.14em] text-[#713d4b] underline decoration-[#c9959f] underline-offset-4 transition-colors hover:text-[#a45c6c]"
						>
							View all scents
						</Link>
					</div>

					<div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
						{featuredProducts.map((product) => (
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
				</div>
			</section>
		</main>
	);
}