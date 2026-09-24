import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#202126] bg-[#0b0c0e]">
      <div
        className="
          mx-auto
          flex
          min-h-16
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-5
          px-4
          py-4

          sm:flex-row
          sm:justify-between
          sm:px-6
          sm:py-10

          lg:px-8
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Fitlog Logo"
            width={32}
            height={32}
            className="
              h-7
              w-7
              object-contain

              sm:h-8
              sm:w-8
            "
          />

          <span
            className="
              text-lg
              font-bold
              uppercase
              text-white

              sm:text-xl
            "
          >
            Fitlog
          </span>
        </Link>

        {/* Copyright */}
        <p
          className="
            max-w-full
            text-center
            text-xs
            leading-6
            text-gray-500

            sm:max-w-none
            sm:text-right
            sm:text-sm
          "
        >
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
