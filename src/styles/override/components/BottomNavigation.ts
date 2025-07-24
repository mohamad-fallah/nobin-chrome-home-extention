import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiBottomNavigation = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.buttonHeight,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiBottomNavigation;
