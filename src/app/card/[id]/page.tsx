import Addtodayplanbtn from "@/app/component/Addtodayplanbtn";
import Saveforlaterbtn from "@/app/component/Saveforlaterbtn";
import { Icard } from "@/app/type/cardtype";
import Image from "next/image";

interface Icarddetailsprops {
  params: Promise<{ id: string }>;
}

const Cardfetching = async (id: string): Promise<Icard> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: Icard = await response.json();

  return data;
};

const Detailspage = async ({ params }: Icarddetailsprops) => {
  const { id } = await params;

  // Fetch the specific workout using the ID
  const card = await Cardfetching(id);

  // Handle workout not found
  if (!card) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b0e14] text-white">
        <h1 className="text-2xl font-bold">Workout not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0e14] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
        {/* Left Column: Image */}
        <div className="relative h-100 w-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl sm:h-125 lg:h-200">
          <Image
            src={card.image}
            alt={card.name}
            fill
            sizes="(max-width: 1024px) [588px], [735px]"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Title & Description */}
          <div>
            <h1 className="mb-2 text-[36px] font-bold font-oswald uppercase tracking-wider sm:text-[36px]">
              {card.name}
            </h1>

            <p className="text-[16px] font-inter leading-relaxed text-gray-400 sm:text-base">
              {card.description}
            </p>
          </div>

          {/* Muscle Group Tags */}
          <div className="flex flex-wrap gap-2">
            {card.muscleGroups?.map((tag, index) => (
              <span
                key={index}
                className="rounded-xl bg-[#ccff00] px-5 py-1 text-xs font-inter font-semibold uppercase tracking-wide text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details Metadata Panel */}
          <div className="flex flex-col gap-4 rounded-2xl border font-inter border-white/5 bg-[#161922] p-5 text-sm shadow-xl">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Equipment
              </span>

              <span className="font-medium text-gray-200">
                {card.equipment}
              </span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Difficulty
              </span>

              <span className="font-medium text-gray-200">
                {card.difficulty}
              </span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Sets
              </span>

              <span className="font-medium text-gray-200">{card.sets}</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Reps
              </span>

              <span className="font-medium text-gray-200">{card.reps}</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Duration
              </span>

              <span className="font-medium text-gray-200">
                {card.duration} min
              </span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Calories
              </span>

              <span className="font-medium text-gray-200">
                {card.caloriesBurned} kcal
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Rating
              </span>

              <span className="font-medium text-gray-200">
                {card.rating} / 5
              </span>
            </div>
          </div>

          {/* Instructions */}
          {card.instructions && card.instructions.length > 0 && (
            <div className="flex flex-col gap-2">
              <h3 className="text-[16px] font-inter font-extrabold uppercase tracking-widest text-white">
                Instructions
              </h3>

              <ol className="list-inside list-decimal space-y-1.5 text-[14px] font-inter font-medium text-gray-300">
                {card.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 font-inter font-medium text-[14px] pt-4 sm:flex-row">
            <Addtodayplanbtn card={card} />
            <Saveforlaterbtn card={card} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
