"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { Icard } from "../type/cardtype";
import SavedcardRemove from "../removedcard/SavedcardRemove";

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
          <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-28 md:h-16 md:w-24 lg:h-16 lg:w-24">
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(max-width: 640px) 100vw, 112px"
              className="object-cover"
            />
          </div>

          {/* Exercise Info */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="truncate text-xl font-black uppercase tracking-wider text-white sm:text-base md:text-sm lg:text-sm">
              {card.name}
            </h3>

            <p className="truncate text-md font-medium text-gray-400 sm:text-sm md:text-sm lg:text-sm">
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
                <span className="shrink-0">🔥</span>
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
         <SavedcardRemove  cardid={card.id}/>

        </div>
      </div>
    </div>
  );
};

export default SavedCard;