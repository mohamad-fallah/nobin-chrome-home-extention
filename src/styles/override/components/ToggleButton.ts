import variables from "../variables";

const MuiToggleButton = {
  styleOverrides: {
    root: {
      borderRadius: variables.buttonBorderRadius,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
      fontSize: variables.buttonFontSize,
      transition: `all ${variables.duration} ${variables.easing}`,
    },
    selected: {
      background: variables.palette.primary.main,
      color: variables.palette.primary.contrastText,
    },
  },
};
export default MuiToggleButton;
