import Image from "next/image";
import { FiClock, FiStar } from "react-icons/fi";
import { Icard } from "../type/cardtype";

interface AllCardProps {
  card: Icard;
}

export default function AllCard({ card }: AllCardProps) {
  return (
    <div className="card w-full max-w-sm overflow-hidden rounded-3xl border border-white/5 bg-[#161922] text-white shadow-xl">

      {/* Image */}
      <figure className="px-3 pt-3">
        <div className="relative h-56 w-full overflow-hidden rounded-2xl">
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover"
          />
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-6 pt-4">

        {/* Tags */}
        <div className="mb-2 flex flex-wrap gap-2">
          {card.muscleGroups.map((tag, index) => (
            <span
              key={index}
              className="rounded-lg border-none bg-[#ccff00] px-3 py-2.5 text-xs font-extrabold uppercase tracking-wide text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Difficulty */}
        <div className="mb-2">
          <span className="rounded-md border border-gray-600 px-2 py-1 text-xs text-gray-400">
            {card.difficulty}
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-2xl font-black uppercase tracking-wider">
          {card.name}
        </h2>

        {/* Description */}
        <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-400">
          {card.description}
        </p>

        {/* Divider */}
        <div className="my-3 border-t border-white/10"></div>

        {/* Workout Information */}
        <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">

          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <FiClock className="text-gray-400" />
            <span>{card.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <span className="text-base">🔥</span>
            <span>{card.caloriesBurned} kcal</span>
          </div>

          {/* Sets */}
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">Sets:</span>
            <span>{card.sets}</span>
          </div>

          {/* Reps */}
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">Reps:</span>
            <span>{card.reps}</span>
          </div>

        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-1.5 text-sm">
          <FiStar className="text-[#ccff00]" />
          <span className="font-semibold">{card.rating}</span>
          <span className="text-gray-500">/ 5</span>
        </div>

      </div>
    </div>
  );
}