import { useMemo, useState, type FC, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { createAppTheme } from "../styles/theme";
import ThemeModeContext, {
  type ThemeModeContextProps,
} from "../contexts/ThemeModeContext";

export const ThemeModeProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleMode = () =>
    setMode((prev) => (prev === "dark" ? "light" : "dark"));

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const contextValue: ThemeModeContextProps = { mode, toggleMode };

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};
