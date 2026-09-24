"use client";
import SavedCard from "./SavedCard";
import React, { useContext, useState } from "react";

import { FiChevronDown } from "react-icons/fi";

import { ExerciseContext } from "../Context/ExerciseContext";
import { Icard } from "../type/cardtype";

import Fallback from "./planfallback";
import PlanCard from "./plancard";

const Planpage = () => {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const { planexercise, saveexercise } = useContext(ExerciseContext) as {
    planexercise: Icard[];
    saveexercise: Icard[];
  };

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
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Sort By</span>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn flex items-center gap-2 rounded-xl border border-white/10 bg-[#161922] px-4 py-2 text-xs font-medium normal-case text-white hover:bg-[#1f2430]"
              >
                Duration
                <FiChevronDown />
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] mt-2 w-40 rounded-xl border border-white/10 bg-[#161922] p-2 text-white shadow"
              >
                <li>
                  <button>Duration</button>
                </li>

                <li>
                  <button>Calories</button>
                </li>

                <li>
                  <button>Rating</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= TODAY'S PLAN ================= */}
        {activeTab === "plan" && (
          <>
            {planexercise.length === 0 ? (
              <Fallback />
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {planexercise.map((card: Icard) => (
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
                {saveexercise.map((exercise: Icard) => (
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
