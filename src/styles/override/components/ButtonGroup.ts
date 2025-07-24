import variables from "../variables";

const MuiButtonGroup = {
  styleOverrides: {
    root: {
      borderRadius: variables.buttonBorderRadius,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiButtonGroup;
