import { useState, type FC, useMemo, useCallback } from "react";
import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import ThemeModeContext from "../contexts/ThemeModeContext";
import { createAppTheme } from "../styles/theme";

interface ThemeModeProviderProps {
  children: ReactNode;
}

const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
