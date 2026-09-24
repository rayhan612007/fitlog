"use client";

import React, { Dispatch, SetStateAction, useContext } from "react";
import { RxCross2 } from "react-icons/rx";

import { ExerciseContext } from "../Context/ExerciseContext";
import { Icard } from "../type/cardtype";

const SavedcardRemove = ({ cardid }: { cardid: number }) => {
  const {saveexercise, setSavedexercise} = useContext(
    ExerciseContext
  ) as {
    saveexercise: Icard[];
    setSavedexercise: Dispatch<SetStateAction<Icard[]>>;
  };

  const handleremove = () => {
    setSavedexercise((previous) =>
      previous.filter((card) => card.id !== cardid)
    );
  };

  return (
    <button
      type="button"
      className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white sm:ml-0"
      onClick={handleremove}
      aria-label="Remove exercise"
    >
      <RxCross2 />
    </button>
  );
};

export default SavedcardRemove;