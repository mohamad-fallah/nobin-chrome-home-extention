import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiBottomNavigationAction = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        color: variables.palette.text.primary,
        fontSize: variables.iconSize,
      },
      selected: {
        color: variables.palette.primary.main,
      },
    },
  };
};
export default MuiBottomNavigationAction;
