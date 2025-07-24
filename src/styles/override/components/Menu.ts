import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiMenu = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      paper: {
        borderRadius: variables.menuRadius,
        padding: variables.menuPadding,
        boxShadow: variables.menuElevation ? variables.shadow : "none",
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
      list: {
        padding: variables.menuPadding,
      },
    },
  };
};
export default MuiMenu;
