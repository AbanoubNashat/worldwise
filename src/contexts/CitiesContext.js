import { createContext, useContext } from "react";

const CitiesContext = createContext();

function useCitiesContext() {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error("Cities Context Called Outside Of It's Provider");
  }

  return context;
}

export { CitiesContext, useCitiesContext };
