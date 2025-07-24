import { createContext } from "react";

export interface ThemeModeContextType {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(
  undefined
);

export default ThemeModeContext;
