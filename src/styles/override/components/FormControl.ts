import getVariables from "../variables";

const variables = getVariables("light");

const MuiFormControl = {
  styleOverrides: {
    root: {
      margin: variables.margin,
      color: variables.palette.text.primary,
      background: variables.palette.background.paper,
    },
  },
};
export default MuiFormControl;
