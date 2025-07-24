import getVariables from "../variables";

const variables = getVariables("light");

const MuiFab = {
  styleOverrides: {
    root: {
      width: variables.buttonHeight,
      height: variables.buttonHeight,
      borderRadius: variables.buttonBorderRadius,
      boxShadow: variables.buttonElevation ? variables.shadow : "none",
      background: variables.palette.primary.main,
      color: variables.palette.primary.contrastText,
      fontSize: variables.buttonFontSize,
    },
  },
};
export default MuiFab;
