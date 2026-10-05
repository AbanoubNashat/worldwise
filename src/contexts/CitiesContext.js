import { createContext, useContext } from "react";

export const CitiesContext = createContext();

export function useCitiesContext() {
  const context = useContext(CitiesContext);

  if (context === undefined) {
    throw new Error("Cities Context Called Outside Of Its Provider");
  }

  return context;
}
