'use client'
import React, { createContext, useState } from "react";


export const ExerciseContext = createContext({});

const ExerciseContextProvider = ({children}: {children: React.ReactNode}) => {
  const [planexercise, setPlanexercise] = useState([]);
  const [saveexercise, setSavedexercise] = useState([]);

  const shareddata = {
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
