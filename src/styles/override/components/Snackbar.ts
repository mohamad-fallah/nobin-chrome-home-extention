import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiSnackbar = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        minHeight: variables.snackbarHeight,
        fontSize: variables.snackbarFontSize,
        borderRadius: variables.snackbarRadius,
        boxShadow: variables.snackbarElevation ? variables.shadow : "none",
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
    },
  };
};
export default MuiSnackbar;
