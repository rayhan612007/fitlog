"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { Icard } from "../type/cardtype";
import SavedcardRemove from "../removedcard/SavedcardRemove";
import { FaFireFlameCurved } from "react-icons/fa6";

interface SavedCardProps {
  card: Icard;
}

const SavedCard = ({ card }: SavedCardProps) => {
  return (
    <div className="w-full rounded-2xl border border-white/5 bg-[#161922] p-4 shadow-xl sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* ================= LEFT SIDE ================= */}
        <div className="flex w-full min-w-0 flex-col gap-4 md:flex-row md:items-center lg:w-auto">
          {/* Image */}
          <div className="relative md:h-[80px] lg:h-[80px] h-35 md:w-[144px] lg:w-[144px] w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-28">
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(max-width: 640px) 80px, 144px"
              className="object-cover"
            />
          </div>

          {/* Exercise Info */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="truncate md:text-[16px] lg:text-[16px] text-xl font-bold font-oswald uppercase tracking-wider text-white sm:text-base">
              {card.name}
            </h3>

            <p className="truncate text-md lg:text-[12px] md:text-[12px] font-semibold font-inter text-gray-400 sm:text-sm">
              {card.equipment}
            </p>

            {/* Exercise Details */}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-gray-300">
              {/* Duration */}
              <div className="flex items-center gap-1">
                <FiClock className="shrink-0 text-gray-400" />
                <span>{card.duration} min</span>
              </div>

              {/* Calories */}
              <div className="flex items-center gap-1">
                <FaFireFlameCurved className="shrink-0 text-[#ccff00]" />
                <span>{card.caloriesBurned} kcal</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                <FiStar className="shrink-0 text-gray-400" />
                <span>{card.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex w-full flex-wrap items-center justify-end gap-2.5 pt-3 sm:flex-nowrap lg:w-auto lg:pt-0">
          {/* View Details */}
          <Link
            href={`/card/${card.id}`}
            className="btn btn-sm flex flex-1 items-center justify-center rounded-xl border border-white/10 bg-[#1f2430] px-3 text-xs font-medium normal-case text-white hover:bg-[#2a303c] sm:flex-none sm:px-4"
          >
            View Details
          </Link>

          {/* Remove */}
          <SavedcardRemove cardid={card.id} />
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
