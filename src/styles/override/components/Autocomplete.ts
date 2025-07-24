import getVariables from "../variables";

const variables = getVariables("light");

const MuiAutocomplete = {
  styleOverrides: {
    root: {
      borderRadius: variables.inputBorderRadius,
      fontSize: variables.inputFontSize,
      padding: `${variables.inputPaddingY}px ${variables.inputPaddingX}px`,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
    },
    inputRoot: {
      borderRadius: variables.inputBorderRadius,
      fontSize: variables.inputFontSize,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
    },
    popupIndicator: {
      color: variables.palette.primary.main,
    },
  },
};
export default MuiAutocomplete;
