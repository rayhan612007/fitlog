"use client";
import React, { useContext } from "react";
import { FiBookmark } from "react-icons/fi";
import { ExerciseContext } from "../Context/ExerciseContext";
import { Icard } from "../type/cardtype";
import { toast } from "react-toastify";
const Saveforlaterbtn = ({ card }: { card: Icard }) => {
  const { saveexercise, setSavedexercise } = useContext(ExerciseContext) as {
    saveexercise: Icard[];
    setSavedexercise: React.Dispatch<React.SetStateAction<Icard[]>>;
  };
  const handlesave = () => {
    const alreadyAdded = saveexercise.find(
      (exercise) => exercise.id === card.id,
    );
    if (alreadyAdded) {
      toast.error("You already Saved this exercise!");
      return;
    }
    setSavedexercise([...saveexercise, card]);
    toast.success(`${card.name} saved successfully`);
  };

  return (
    <div>
      <button
        onClick={() => handlesave()}
        className="btn bg-[#161922] hover:bg-[#1f2430] font-inter font-medium text-[14px] text-white border border-white/10 flex-1 rounded-xl"
      >
        <FiBookmark className="text-base" /> Save for later
      </button>
    </div>
  );
};

export default Saveforlaterbtn;
