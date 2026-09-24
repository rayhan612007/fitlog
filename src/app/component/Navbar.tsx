"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkouts = pathname === "/";
  const isMyPlan = pathname === "/myplan";


  return (
    <div className="navbar min-h-20 bg-[#0d0e10] px-4 sm:px-6 lg:px-8 sticky">
      {/* ================= LEFT ================= */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="mr-2 cursor-pointer p-2 text-gray-300"
          >
            {/* Hamburger */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile Menu */}
          <ul
            tabIndex={0}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-[#151619] p-3 shadow-lg"
          >
            {/* Workouts */}
            <li>
              <Link
                href="/"
                className={
                  isWorkouts
                    ? "rounded-full bg-[#17250c] font-semibold text-[#b6ff00]"
                    : "text-gray-400 hover:text-white"
                }
              >
                Workouts
              </Link>
            </li>

            {/* My Plan */}
            <li>
              <Link
                href="/myplan"
                className={
                  isMyPlan
                    ? "rounded-full bg-[#17250c] font-semibold text-[#b6ff00]"
                    : "text-gray-400 hover:text-white"
                }
              >
                My Plan
              </Link>
            </li>

            {/* Saved */}
            <li>
              <Link
                href="/saved"
                className={
                  "text-gray-400 hover:text-white"
                }
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt="Fitlog Logo"
            width={38}
            height={38}
            className="h-8 w-8 sm:h-9 sm:w-9"
          />

          <h1 className="text-xl font-bold uppercase text-white sm:text-2xl">
            Fitlog
          </h1>
        </Link>
      </div>

      {/* ================= CENTER ================= */}
      <div className="navbar-center hidden md:flex">
        <ul className="flex items-center gap-1 sm:gap-2 lg:gap-3">
          {/* Workouts */}
          <li>
            <Link
              href="/"
              className={`
                rounded-full
                px-4
                py-2
                text-sm
                transition
                sm:px-6
                sm:py-3
                sm:text-base
                ${
                  isWorkouts
                    ? "bg-[#17250c] font-semibold text-[#b6ff00]"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              Workouts
            </Link>
          </li>

          {/* My Plan */}
          <li>
            <Link
              href="/myplan"
              className={`
                rounded-full
                px-4
                py-2
                text-sm
                transition
                sm:px-6
                sm:py-3
                sm:text-base
                ${
                  isMyPlan
                    ? "bg-[#17250c] font-semibold text-[#b6ff00]"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="navbar-end">
        <div className="flex items-center gap-3 sm:gap-5 lg:gap-7">
          {/* Plan */}
          <Link
            href="/myplan"
            className={`
              flex items-center gap-1.5 text-sm transition sm:gap-2 sm:text-base
              
            `}
          >
            <span>Plan</span>

            <span
              className="
                flex
                h-6
                min-w-6
                items-center
                justify-center
                rounded-full
                bg-[#b6ff00]
                px-1.5
                text-xs
                font-bold
                text-black
                sm:h-7
                sm:min-w-7
                sm:px-2
                sm:text-sm
              "
            >
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/myplan"
            className={`
              flex items-center gap-1.5 text-sm transition sm:gap-2 sm:text-base
            "text-gray-400 hover:text-white"
            `}
          >
            <span>Saved</span>

            <span
              className={`
                flex
                h-6
                min-w-6
                items-center
                justify-center
                rounded-full
                px-1.5
                text-xs
                sm:h-7
                sm:min-w-7
                sm:px-2
                sm:text-sm
                border border-gray-600
        
              `}
            >
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
