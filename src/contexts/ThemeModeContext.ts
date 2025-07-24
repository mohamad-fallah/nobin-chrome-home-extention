import { createContext } from "react";

export interface ThemeModeContextProps {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextProps | undefined>(
  undefined
);

export default ThemeModeContext;
