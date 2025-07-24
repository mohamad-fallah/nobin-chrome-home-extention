import { useContext } from "react";
import ThemeModeContext from "../contexts/ThemeModeContext";

const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context)
    throw new Error("useThemeMode must be used within ThemeModeProvider");
  return context;
};

export default useThemeMode;
