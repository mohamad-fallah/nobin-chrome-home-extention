import getVariables from "../variables";

const variables = getVariables("light");

const MuiChip = {
  styleOverrides: {
    root: {
      borderRadius: variables.chipRadius,
      height: variables.chipHeight,
      fontSize: variables.chipFontSize,
      padding: `0 ${variables.chipPaddingX}px`,
      color: variables.palette.text.primary,
      background: variables.palette.background.chip,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
    },
  },
};
export default MuiChip;
