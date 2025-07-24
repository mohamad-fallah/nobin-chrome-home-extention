import getVariables from "../variables";

const variables = getVariables("light");

const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: variables.buttonBorderRadius,
      padding: `${variables.buttonPaddingY}px ${variables.buttonPaddingX}px`,
      fontSize: variables.buttonFontSize,
      minWidth: variables.buttonMinWidth,
      boxShadow: variables.buttonElevation ? variables.shadow : "none",
      color: variables.palette.primary.contrastText,
      background: variables.palette.primary.main,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.borderColor,
      transition: `all ${variables.duration} ${variables.easing}`,
    },
  },
};

export default MuiButton;
