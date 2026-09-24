"use client";
import SavedCard from "./SavedCard";
import React, { useContext, useState } from "react";

import { ExerciseContext } from "../Context/ExerciseContext";
import { Icard } from "../type/cardtype";

import Fallback from "./planfallback";
import PlanCard from "./plancard";

const Planpage = () => {
  
  const { planexercise, saveexercise } = useContext(ExerciseContext) as {
    planexercise: Icard[];
    saveexercise: Icard[];
  };


  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">("Duration");

  const sortcards = (card:Icard[]) => {
    const sortedCards = [...card];

    if(sortBy === "Duration"){
      sortedCards.sort((a,b) => a.duration - b.duration);
    }else if(sortBy === "Calories"){
      sortedCards.sort((a,b) => a.caloriesBurned - b.caloriesBurned);
    }
    if(sortBy === "Rating"){
      sortedCards.sort((a,b) => b.rating - a.rating);
    }
    return sortedCards;
  }
  const sortedPlanCards = sortcards(planexercise);
  const sortedsavedCards = sortcards(saveexercise);


  const totalMinutes = (minutes: Icard[]) =>
    minutes.reduce(
      (accumulator: number, current: Icard) => accumulator + current.duration,
      0,
    );

  const totalCalories = (calories: Icard[]) =>
    calories.reduce(
      (accumulator: number, current: Icard) =>
        accumulator + current.caloriesBurned,
      0,
    );

  return (
    <div className="min-h-screen bg-[#0b0e14] px-4 py-10 text-white sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {/* ================= TITLE ================= */}
        <div>
          <h1 className="mb-1 text-3xl font-black uppercase tracking-wider sm:text-4xl">
            My Plan
          </h1>

          <p className="text-sm font-medium text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* ================= METRICS ================= */}
        <div className="grid grid-cols-1 gap-4 rounded-3xl border border-white/5 bg-[#161922] p-6 shadow-xl sm:grid-cols-3">
          {/* Exercises */}
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Exercises
            </span>

            <span className="mt-1 text-3xl font-black text-[#ccff00] sm:text-4xl">
              {/* (
                `activeTab === "saved" && {planexercise.length}``
              ) */}
              {activeTab === "plan" ? planexercise.length : saveexercise.length}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col sm:border-l sm:border-white/5 sm:pl-6">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Minutes
            </span>

            <span className="mt-1 text-3xl font-black text-white sm:text-4xl">
              {activeTab === "plan"
                ? totalMinutes(planexercise)
                : totalMinutes(saveexercise)}
            </span>
          </div>

          {/* Calories */}
          <div className="flex flex-col sm:border-l sm:border-white/5 sm:pl-6">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Calories
            </span>

            <span className="mt-1 text-3xl font-black text-white sm:text-4xl">
              {activeTab === "plan"
                ? totalCalories(planexercise)
                : totalCalories(saveexercise)}
            </span>
          </div>
        </div>

        {/* ================= TABS + SORT ================= */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          {/* Tabs */}
          <div className="tabs tabs-box rounded-2xl border border-white/5 bg-[#161922] p-1.5">
            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("plan")}
              className={`tab rounded-xl px-5 text-xs font-bold uppercase transition ${
                activeTab === "plan"
                  ? "bg-[#1f2430] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`tab rounded-xl px-5 text-xs font-bold uppercase transition ${
                activeTab === "saved"
                  ? "bg-[#1f2430] text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex flex-col md:flex-row items-center w-auto gap-2 whitespace-nowrap text-md text-gray-400">
            <span>Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "Duration" | "Calories" | "Rating")}
              className="select rounded-xl border w-80 border-white/10 bg-[#161922] px-4 text-md font-medium text-white outline-none hover:bg-[#1f2430]"
            >
              <option value="Duration">Duration</option>
              <option value="Calories">Calories</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        {/* ================= TODAY'S PLAN ================= */}
        {activeTab === "plan" && (
          <>
            {planexercise.length === 0 ? (
              <Fallback />
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {sortedPlanCards.map((card: Icard) => (
                  <PlanCard key={card.id} card={card} />
                ))}
              </div>
            )}
          </>
        )}

        {/* ================= SAVED ================= */}
        {activeTab === "saved" && (
          <>
            {saveexercise.length === 0 ? (
              <Fallback />
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {sortedsavedCards.map((exercise: Icard) => (
                  <SavedCard key={exercise.id} card={exercise} />
                ))}{" "}
              </div>
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default Planpage;
