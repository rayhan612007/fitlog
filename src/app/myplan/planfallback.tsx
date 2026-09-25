import Link from "next/link";
import React from "react";

const Fallback = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-white/10 bg-[#161922]/50 p-12 text-center shadow-2xl sm:p-20">
        <div className="flex flex-col gap-1">
          <h3 className="text-[16px] font-oswald font-bold  uppercase tracking-wider text-white sm:text-[20px]">
            Nothing here yet
          </h3>

          <p className="max-w-sm text-[12px] font-inter text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>
        </div>

        <Link
          href="/"
          className="btn mt-2 rounded-xl border-none bg-[#ccff00] px-6 text-xs font-bold uppercase text-black shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:bg-[#b3e600] font-inter"
        >
          Go to workouts
        </Link>
      </div>
    </div>
  );
};

export default Fallback;
