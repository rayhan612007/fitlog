"use client";

import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0f1117] px-6 text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center">
        <div className="w-full text-center">
          {/* 404 */}
          <div className="mb-6">
            <h1 className="text-[120px] font-black leading-none tracking-tight text-white sm:text-[160px]">
              404
            </h1>
          </div>

          {/* Message */}
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Page Not Found
          </h2>

          <p className="mx-auto mb-8 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
            Sorry, the page you are looking for doesn&apos;t exist or may have
            been moved to another location.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="btn btn-primary flex w-full items-center justify-center gap-2 rounded-xl px-6 sm:w-auto"
            >
              <FiHome size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
