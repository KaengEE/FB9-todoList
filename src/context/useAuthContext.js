import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "useAuthContext는 AuthContextProvider 내에서만 사용가능합니다."
    );
  }

  return context;
};
