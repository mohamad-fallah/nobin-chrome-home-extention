import getVariables from "../variables";

const variables = getVariables("light");

const MuiAccordion = {
  styleOverrides: {
    root: {
      borderRadius: variables.borderRadius,
      borderWidth: variables.borderWidth,
      borderStyle: variables.borderStyle,
      borderColor: variables.palette.border.main,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
      boxShadow: variables.shadow,
    },
  },
};
export default MuiAccordion;
