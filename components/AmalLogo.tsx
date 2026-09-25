type AmalLogoProps = {
  className?: string;
  showRose?: boolean;
};

export default function AmalLogo({
  className = "",
  showRose = true,
}: AmalLogoProps) {
  return (
    <div
      className={`flex flex-col items-center leading-none bg-rose-200`}
      aria-label="AMAL"
    >
      {/* Arabic Logo */}
      <div
        dir="rtl"
        className="font-serif text-5xl font-light tracking-wide text-[#9f4f62]"
      >
        أمل
      </div>

      {/* Rose */}
      {showRose && (
        <div className="relative -mt-2 mb-1 text-[#c87589]">
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M14 17C12 12 5 11 5 6C5 2 10 1 14 5C18 1 23 2 23 6C23 11 16 12 14 17Z"
              stroke="currentColor"
              strokeWidth="1.3"
            />

            <path
              d="M14 17C14 12 14 8 14 5"
              stroke="currentColor"
              strokeWidth="1.2"
            />

            <path
              d="M14 14C11 12 9 12 7 13"
              stroke="currentColor"
              strokeWidth="1.1"
            />

            <path
              d="M14 14C17 12 19 12 21 13"
              stroke="currentColor"
              strokeWidth="1.1"
            />
          </svg>
        </div>
      )}

      {/* English Brand Name */}
      <div className="font-serif text-xl tracking-[0.35em] text-[#9f4f62]">
        AMAL
      </div>

      {/* Optional descriptor */}
      <div className="mt-2 text-[8px] uppercase tracking-[0.35em] text-[#b8838e]">
        Parfum
      </div>
    </div>
  );
}