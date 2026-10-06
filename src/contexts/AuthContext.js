import { createContext, useContext } from "react";

export const AuthContext = createContext();

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Auth Context Not Provided");
  return context;
}
