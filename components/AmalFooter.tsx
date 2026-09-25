
import AmalLogo from "./AmalLogo";
import Link from "next/link";

export default function AmalFooter() {
  return (
    <footer className="bg-[#f8e8eb] text-[#6f4650]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">
            <AmalLogo />

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#8c6870]">
              A fragrance inspired by hope, elegance, and the beauty
              found in every moment.
            </p>

            <p className="mt-5 font-serif text-sm italic text-[#a45c6c]">
              Hope in every moment.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em]">
              Shop
            </h3>

            <ul className="space-y-3 text-sm text-[#8c6870]">
              <li>
                <a
                  href="/shop"
                  className="transition hover:text-[#a45c6c]"
                >
                  All Fragrances
                </a>
              </li>

              <li>
                <Link
                  href="/bestsellers"
                  className="transition hover:text-[#a45c6c]"
                >
                  Best Sellers
                </Link>
              </li>

              <li>
                <a
                  href="/shop/gifts"
                  className="transition hover:text-[#a45c6c]"
                >
                  Gifts
                </a>
              </li>

              <li>
                <a
                  href="/shop/discovery"
                  className="transition hover:text-[#a45c6c]"
                >
                  Discovery Set
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em]">
              AMAL
            </h3>

            <ul className="space-y-3 text-sm text-[#8c6870]">
              <li>
                <a
                  href="/story"
                  className="transition hover:text-[#a45c6c]"
                >
                  Our Story
                </a>
              </li>

              <li>
                <a
                  href="/fragrance"
                  className="transition hover:text-[#a45c6c]"
                >
                  The Fragrance
                </a>
              </li>

              <li>
                <a
                  href="/journal"
                  className="transition hover:text-[#a45c6c]"
                >
                  Journal
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-[#a45c6c]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em]">
              Stay Connected
            </h3>

            <p className="mb-5 text-sm leading-6 text-[#8c6870]">
              Discover new fragrances, stories, and moments of inspiration.
            </p>

            <form className="flex border-b border-[#c9959f] pb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#b58b93]"
              />

              <button
                type="submit"
                className="text-xs font-semibold uppercase tracking-widest text-[#9f4f62] transition hover:text-[#713d4b]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#e2c4ca]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-xs text-[#9b777e]">
            © {new Date().getFullYear()} AMAL. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 text-xs uppercase tracking-widest">
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:text-[#9f4f62]"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="transition hover:text-[#9f4f62]"
            >
              Facebook
            </a>

            <a
              href="#"
              aria-label="Pinterest"
              className="transition hover:text-[#9f4f62]"
            >
              Pinterest
            </a>
          </div>

          <p className="font-serif text-sm italic text-[#a45c6c]">
            أمل — Hope
          </p>
        </div>
      </div>
    </footer>
  );
}

