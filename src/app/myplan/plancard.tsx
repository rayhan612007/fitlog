import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiCheck, FiX } from "react-icons/fi";
import { Icard } from "../type/cardtype";
import Removecard from "../removedcard/Removecard";
import Markasdone from "../removedcard/Markasdone";

interface PlanCardProps {
  card: Icard;
  onRemove?: (id: number) => void;
  onMarkDone?: (id: number) => void;
}

export default function PlanCard({
  card,
  onMarkDone,
}: PlanCardProps) {
  return (
    <div className="w-full rounded-2xl border border-white/5 bg-[#161922] p-4 shadow-xl sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        
        {/* ================= LEFT SIDE ================= */}
        <div className="flex min-w-0 w-full flex-col md:flex-row lg:flex-row md:items-center lg:items-center gap-4 lg:w-auto">
          {/* Image */}
          <div className="relative md:h-16 lg:h-16 h-35 md:w-24 lg:w-24 w-full shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-28">
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(max-width: 640px) 96px, 112px"
              className="object-cover"
            />
          </div>

          {/* Exercise Info */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h3 className="truncate md:text-sm lg:text-sm text-xl font-black uppercase tracking-wider text-white sm:text-base">
              {card.name}
            </h3>

            <p className="truncate text-md lg:text-sm md:text-sm font-medium text-gray-400 sm:text-sm">
              {card.equipment}
            </p>

            {/* Exercise Details */}
            <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 md:text-sm text-sm font-medium text-gray-300 sm:text-sm">
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
        <div className="flex md:w-full flex-wrap items-center gap-2.5  pt-3 sm:flex-nowrap lg:w-auto lg:pt-0 lg:justify-end">
          {/* View Details */}
          <Link
            href={`/card/${card.id}`}
            className="btn btn-sm flex md:flex-1 lg:flex-1 items-center justify-center rounded-xl border border-white/10 bg-[#1f2430] px-3 text-xs font-medium normal-case text-white hover:bg-[#2a303c] sm:flex-none px-2 lg:px-4 md:px-4 sm:px-4"
          >
            View Details
          </Link>

          {/* Mark as Done */}
          {/* <button
            type="button"
            onClick={() => onMarkDone?.(card.id)}
            className="btn btn-sm flex  md:flex-1 lg:flex-none items-center justify-center gap-1.5 rounded-xl border-none bg-[#ccff00] px-3 text-xs font-bold normal-case text-black hover:bg-[#b3e600] sm:flex-none sm:px-4"
          >
            <FiCheck className="shrink-0 text-sm font-bold" />
            <span>Mark as Done</span>
          </button> */}
          <Markasdone cardid={card.id}/>
          
            {/* <button
              type="button"
              className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white sm:ml-0"
              
            >
              <RxCross2 />
            </button> */}
            <Removecard cardid={card.id} />

        </div>

      </div>
    </div>
  );
}