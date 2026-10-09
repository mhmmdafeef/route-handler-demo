type AmalLogoProps = {
  className?: string;
  showRose?: boolean;
};

export default function AmalLogo({
  className = "",
  showRose = true,
}: AmalLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {showRose && (
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#d8b2ba] text-[#9f4f62]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="0.7" />
            <path
              d="M18 25.5c-3.2-2.2-7.2-3.8-7.2-8 0-2.5 3.1-3.7 5.3-1.1.4-2.7 3.6-2.7 4 0 2.2-2.6 5.3-1.4 5.3 1.1 0 4.2-4 5.8-7.4 8Z"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinejoin="round"
            />
            <path
              d="M18 25.5v-9m0 6.4c-1.7-1.5-3.4-1.9-5.3-1.4m5.3 1.4c1.7-1.5 3.4-1.9 5.3-1.4"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}

      <span className="flex flex-col items-start leading-none">
        <span dir="rtl" className="font-heading text-2xl text-[#713d4b]">
          أمل
        </span>
        <span className="mt-0.5 font-heading text-[19px] tracking-[0.19em] text-[#9f4f62]">
          AMAL
        </span>
        <span className="mt-1 text-[7px] font-medium uppercase tracking-[0.36em] text-[#b8838e]">
          Parfum
        </span>
      </span>
    </div>
  );
}