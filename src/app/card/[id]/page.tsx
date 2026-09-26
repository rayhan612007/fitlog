import Addtodayplanbtn from "@/app/component/Addtodayplanbtn";
import Saveforlaterbtn from "@/app/component/Saveforlaterbtn";
import { Icard } from "@/app/type/cardtype";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Icarddetailsprops {
  params: Promise<{ id: string }>;
}

const Cardfetching = async (id: string): Promise<Icard> => {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch workout data");
  }

  return response.json();
};

const Detailspage = async ({ params }: Icarddetailsprops) => {
  const { id } = await params;

  const card = await Cardfetching(id);

  return (
    <main className="min-h-screen bg-[#0b0e14] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-2">
        {/* Left Column - Image */}
        <div className="relative h-100 w-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl sm:h-125 lg:h-200">
          <Image
            src={card.image}
            alt={card.name}
            fill
            sizes="(max-width: 1024px) 588px, 735px"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Title & Description */}
          <div>
            <h1 className="mb-2 font-oswald text-[36px] font-bold uppercase tracking-wider">
              {card.name}
            </h1>

            <p className="font-inter text-[16px] leading-relaxed text-gray-400">
              {card.description}
            </p>
          </div>

          {/* Muscle Group Tags */}
          {card.muscleGroups && card.muscleGroups.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {card.muscleGroups.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="rounded-xl bg-[#ccff00] px-5 py-1 font-inter text-xs font-semibold uppercase tracking-wide text-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Details Metadata Panel */}
          <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#161922] p-5 font-inter text-sm shadow-xl">
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
              <span className="font-medium text-gray-200">
                {card.sets}
              </span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Reps
              </span>
              <span className="font-medium text-gray-200">
                {card.reps}
              </span>
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
              <h3 className="font-inter text-[16px] font-extrabold uppercase tracking-widest text-white">
                Instructions
              </h3>

              <ol className="list-inside list-decimal space-y-1.5 font-inter text-[14px] font-medium text-gray-300">
                {card.instructions.map((step, index) => (
                  <li key={`${step}-${index}`}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4 font-inter text-[14px] font-medium sm:flex-row">
            <Addtodayplanbtn card={card} />
            <Saveforlaterbtn card={card} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detailspage;
