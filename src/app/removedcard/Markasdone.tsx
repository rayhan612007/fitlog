"use client";

import React, { Dispatch, SetStateAction, useContext } from "react";
import { RxCross2 } from "react-icons/rx";

import { ExerciseContext } from "../Context/ExerciseContext";
import { Icard } from "../type/cardtype";
import { FiCheck } from "react-icons/fi";

const Markasdone = ({ cardid }: { cardid: number }) => {
  const { planexercise, setPlanexercise } = useContext(ExerciseContext) as {
    planexercise: Icard[];
    setPlanexercise: Dispatch<SetStateAction<Icard[]>>;
  };

  const handlemarkdone = () => {
    setPlanexercise((previous) =>
      previous.filter((card) => card.id !== cardid),
    );
  };

  return (
    <button
      type="button"
      className="btn btn-sm flex  md:flex-1 lg:flex-none items-center justify-center gap-1.5 rounded-xl border-none bg-[#ccff00] px-3 text-xs font-bold normal-case text-black hover:bg-[#b3e600] sm:flex-none sm:px-4"
          onClick={handlemarkdone}
    >
      <FiCheck className="shrink-0 text-sm font-bold" />
      <span>Mark as Done</span>
    </button>
  );
};

export default Markasdone;
