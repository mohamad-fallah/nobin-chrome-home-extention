import getVariables from "../variables";

const variables = getVariables("light");

const MuiSnackbar = {
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
export default MuiSnackbar;
