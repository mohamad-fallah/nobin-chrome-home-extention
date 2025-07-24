import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiAppBar = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.appBarHeight,
        boxShadow: variables.appBarShadow,
        zIndex: variables.appBarZIndex,
        background: variables.palette.background.appBar,
        color: variables.palette.text.primary,
      },
    },
  };
};

export default MuiAppBar;
