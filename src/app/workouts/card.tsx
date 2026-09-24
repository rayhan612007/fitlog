import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { Icard } from "../type/cardtype";
import Link from "next/link";

interface CardProps {
  card: Icard;
}

export default function Card({ card }: CardProps) {
  return (
    <Link href={`/card/${card.id}`}>
      <div className="card w-full overflow-hidden rounded-2xl border border-white/5 text-white shadow-xl sm:rounded-3xl hover:border-[#ccff00]">
        {/* Image */}
        <figure className="">
          <div className="relative h-50 w-full overflow-hidden sm:h-52  md:h-56">
            <Image
              src={card.image}
              alt={card.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover "
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
                className="rounded-xl bg-[#ccff00] px-3 py-1 font-extrabold uppercase tracking-wide text-black sm:rounded-xl sm:px-5 sm:py-1 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-xl font-black uppercase leading-tight tracking-wide sm:text-2xl">
            {card.name}
          </h2>
          {/* equipment */}
          <p className="shrink-0 text-gray-400 my-5">{card.equipment}</p>

          {/* Divider */}
          <div className="divider"></div>

          {/* Workout Information */}
          <div className="flex flex-row items-center gap-x-3 gap-y-3 text-xs text-gray-300 sm:text-sm">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <FiClock className="shrink-0  text-[#ccff00]" />
              <span>{card.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <span className="shrink-0">🔥</span>
              <span>{card.caloriesBurned} kcal</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm">
              <FiStar className="text-[#ccff00]" />
              <span className="font-semibold">{card.rating}</span>
            </div>
          </div>

          {/* Rating */}
        </div>
      </div>
    </Link>
  );
}
