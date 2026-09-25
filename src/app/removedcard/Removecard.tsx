"use client";
import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { ExerciseContext } from "../Context/ExerciseContext";
import { Icard } from "../type/cardtype";
interface RemoveCardProps {
  cardid: number;
}
const Removecard = ({ cardid }: RemoveCardProps) => {
  const { planexercise, setPlanexercise } = useContext(ExerciseContext) as {
    planexercise: Icard[];
    setPlanexercise: React.Dispatch<React.SetStateAction<Icard[]>>;
  };
  const handleremove = () => {
    setPlanexercise((previous) =>
      previous.filter((card) => card.id !== cardid),
    );
    toast.success("Removed from Today's Plan");
  };
  return (
    <button
      type="button"
      className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-white/5 hover:text-white sm:ml-0"
      onClick={handleremove}
      aria-label="Remove exercise"
    >
      {" "}
      <RxCross2 />{" "}
    </button>
  );
};
export default Removecard;
