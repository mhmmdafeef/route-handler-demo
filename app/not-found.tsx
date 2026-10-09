import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-[#fffaf9] px-6 py-14 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#a45c6c]">
            A little detour
          </p>
          <p className="font-heading text-8xl leading-none text-[#c87589] sm:text-9xl">
            404
          </p>
          <div className="my-7 h-px w-16 bg-[#c9959f]" />
          <h1 className="max-w-lg text-4xl leading-tight text-[#5e313c] sm:text-5xl">
            This moment isn&apos;t here.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#8c6870] sm:text-base">
            The page you&apos;re looking for has drifted beyond our collection.
            Let&apos;s find your way back to something beautiful.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center bg-[#9f4f62] px-6 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#713d4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9f4f62]"
            >
              Return home
            </Link>
            <Link
              href="/bestsellers"
              className="text-xs font-medium uppercase tracking-[0.16em] text-[#713d4b] underline decoration-[#c9959f] underline-offset-4 transition-colors hover:text-[#a45c6c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9f4f62]"
            >
              Explore best sellers
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl overflow-hidden bg-[#f8e8eb] md:max-w-none">
          <Image
            src="/656b7c99-525f-47ab-b7f9-51323645e2bd.jpeg"
            alt="Amal Eternal perfume surrounded by roses"
            width={843}
            height={1124}
            priority
            sizes="(min-width: 768px) 52vw, 100vw"
            className="aspect-4/3 w-full object-cover object-center sm:aspect-5/4 md:aspect-4/5"
          />
        </div>
      </div>
    </main>
  );
}