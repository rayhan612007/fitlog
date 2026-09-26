"use client";

import React, { useContext } from "react";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

import { Icard } from "../type/cardtype";
import { ExerciseContext } from "../Context/ExerciseContext";

interface AddtodayplanbtnProps {
  card: Icard;
}

const Addtodayplanbtn = ({ card }: AddtodayplanbtnProps) => {
  const { planexercise, setPlanexercise } = useContext(ExerciseContext);

  const handlePlan = () => {
    // Check if the exercise is already in today's plan
    const alreadyAdded = planexercise.some(
      (exercise) => exercise.id === card.id
    );

    if (alreadyAdded) {
      toast.error("You already added this exercise!");
      return;
    }

    // Maximum 5 exercises
    if (planexercise.length >= 5) {
      toast.error("Today's plan is full — finish these first!");
      return;
    }

    // Add exercise to today's plan
    setPlanexercise((previousPlan) => [...previousPlan, card]);

    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handlePlan}
      className="btn flex-1 rounded-xl border-none bg-[#ccff00] font-inter text-[14px] font-medium text-black hover:bg-[#b3e600]"
    >
      <FiCalendar className="text-base" />
      Add to today&apos;s plan
    </button>
  );
};

export default Addtodayplanbtn;
