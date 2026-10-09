"use client";
import Link from "next/link";
import AmalLogo from "./AmalLogo";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const {totalItems} =useCart();
  return (
    <header className="border-b border-[#ead5d9] bg-[#f8e8eb]">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <AmalLogo />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="text-sm uppercase tracking-wider text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-sm uppercase tracking-wider text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            Shop
          </Link>

          <Link
            href="/our-story"
            className="text-sm uppercase tracking-wider text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            Our Story
          </Link>

          <Link
            href="/fragrance"
            className="text-sm uppercase tracking-wider text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            Fragrance
          </Link>

          <Link
            href="/journal"
            className="text-sm uppercase tracking-wider text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            Journal
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <button
            aria-label="Search"
            className="text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          {/* Account */}
          <Link
            href="/account"
            aria-label="Account"
            className="hidden text-[#6f3b48] transition hover:text-[#b45f72] sm:block"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </Link>

          {/* Shopping Bag */}
          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="relative text-[#6f3b48] transition hover:text-[#b45f72]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M6 8h12l1 13H5L6 8Z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>

            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#9f4f62] text-[9px] text-white">
              {totalItems}
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            className="md:hidden text-[#6f3b48]"
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}