import { Icard } from "@/app/type/cardtype";
import Image from "next/image";
import React from "react";
import { FiCalendar, FiBookmark } from "react-icons/fi";

interface Icarddetailsprops {
  params: Promise<{ id: string }>;
}

const Cardfetching = async (): Promise<Icard[]> => {
  const data = await fetch("https://api.abcz.workers.dev/api/fitlog");
  if (!data.ok) {
    throw new Error("Failed to fetch workout data");
  }
  const response: Icard[] = await data.json();
  return response;
};

const Detailspage = async ({ params }: Icarddetailsprops) => {
  const { id } = await params;
  const carddata = await Cardfetching();
  const card = carddata.find((c: Icard) => String(c.id) === String(id));

  // Handle case when workout is not found
  if (!card) {
    return (
      <div className="min-h-screen bg-[#0b0e14] flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Workout not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Column: Image */}
        <div className="relative w-full h-100 sm:h-125 lg:h-200 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <Image
            src={card.image}
            alt={card.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Column: Details & Info */}
        <div className="flex flex-col gap-6">
          
          {/* Title & Description */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold uppercase tracking-wider mb-2">
              {card.name}
            </h1>
            <p className="text-gray-400 text-md sm:text-base leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Muscle Group Tags */}
          <div className="flex flex-wrap gap-2">
            {card.muscleGroups?.map((tag, index) => (
              <span
                key={index}
                className="rounded-xl bg-[#ccff00] px-5 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details Metadata Panel */}
          <div className="bg-[#161922] rounded-2xl border border-white/5 p-5 flex flex-col gap-4 text-sm shadow-xl">
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Equipment</span>
              <span className="font-medium text-gray-200">{card.equipment}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Difficulty</span>
              <span className="font-medium text-gray-200">{card.difficulty}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Sets</span>
              <span className="font-medium text-gray-200">{card.sets}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Reps</span>
              <span className="font-medium text-gray-200">{card.reps}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Duration</span>
              <span className="font-medium text-gray-200">{card.duration} min</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-white/5">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Calories</span>
              <span className="font-medium text-gray-200">{card.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 uppercase text-xs tracking-wider">Rating</span>
              <span className="font-medium text-gray-200">{card.rating} / 5</span>
            </div>
          </div>

          {/* Instructions Section (Mapped dynamically from json array) */}
          {card.instructions && card.instructions.length > 0 && (
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-white">
                Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-1.5 text-md text-gray-300 font-medium">
                {card.instructions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button className="btn bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold border-none flex-1 rounded-xl">
              <FiCalendar className="text-base" /> Add to today&apos;s plan
            </button>
            <button className="btn bg-[#161922] hover:bg-[#1f2430] text-white border border-white/10 flex-1 rounded-xl">
              <FiBookmark className="text-base" /> Save for later
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Detailspage;