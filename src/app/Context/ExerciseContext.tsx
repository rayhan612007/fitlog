"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

import { Icard } from "../type/cardtype";

interface ExerciseContextType {
  planexercise: Icard[];
  setPlanexercise: Dispatch<SetStateAction<Icard[]>>;
  saveexercise: Icard[];
  setSavedexercise: Dispatch<SetStateAction<Icard[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType>(
  {} as ExerciseContextType,
);

const ExerciseContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [planexercise, setPlanexercise] = useState<Icard[]>([]);
  const [saveexercise, setSavedexercise] = useState<Icard[]>([]);

  const shareddata: ExerciseContextType = {
    planexercise,
    setPlanexercise,
    saveexercise,
    setSavedexercise,
  };

  return (
    <ExerciseContext.Provider value={shareddata}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
