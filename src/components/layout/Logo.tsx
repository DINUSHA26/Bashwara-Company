import React from 'react';
import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Mockup SVG of Bashwara Logo */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-14 h-14 text-white group-hover:text-gold transition-colors duration-300"
      >
        <path
          d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0ZM50 90C27.9086 90 10 72.0914 10 50C10 27.9086 27.9086 10 50 10C72.0914 10 90 27.9086 90 50C90 72.0914 72.0914 90 50 90Z"
          fill="currentColor"
        />
        <path
          d="M35 50H45V65H35V50ZM55 35H65V65H55V35ZM35 35H50V45H35V35Z"
          fill="currentColor"
        />
      </svg>
      <div className="flex flex-col text-white justify-center">
        <span className="font-serif text-2xl md:text-3xl font-extrabold leading-none tracking-wide">Bashwara</span>
        <span className="text-[10px] md:text-xs tracking-[0.18em] font-semibold opacity-95 uppercase mt-1">& Company (Pvt) Ltd</span>
      </div>
    </Link>
  );
}
