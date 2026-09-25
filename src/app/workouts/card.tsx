import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFireFlameCurved } from "react-icons/fa6";
import { Icard } from "../type/cardtype";

interface CardProps {
  card: Icard;
}

export default function Card({ card }: CardProps) {
  return (
    <Link href={`/card/${card.id}`} className="block">
      <div className="card w-full overflow-hidden rounded-2xl border border-white/5 text-white shadow-xl transition hover:border-[#ccff00] sm:rounded-3xl">
        {/* Image */}
        <figure>
          <div className="relative h-50 w-full overflow-hidden sm:h-52 md:h-56">
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </figure>

        {/* Card Body */}
        <div className="p-4 sm:p-5 md:p-6">
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {card.muscleGroups.map((tag, index) => (
              <span
                key={index}
                className="rounded-xl bg-[#ccff00] px-3 py-1 font-inter text-[11px] font-bold uppercase tracking-wide text-black sm:px-5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-oswald text-[18px] font-bold uppercase leading-tight tracking-wide sm:text-2xl">
            {card.name}
          </h2>

          {/* Equipment */}
          <p className="my-2 shrink-0 font-inter text-[12px] text-gray-400">
            {card.equipment}
          </p>

          {/* Divider */}
          <div className="divider my-2" />

          {/* Workout Information */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-xs text-gray-300 sm:text-sm">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <FiClock className="shrink-0 text-[#ccff00]" />

              <span className="font-inter text-[12px]">
                {card.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <FaFireFlameCurved className="shrink-0 text-[#ccff00]" />

              <span className="font-inter text-[12px]">
                {card.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <FiStar className="text-[#ccff00]" />

              <span className="font-inter text-[12px]">{card.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
