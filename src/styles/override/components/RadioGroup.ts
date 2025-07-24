import getVariables from "../variables";

const variables = getVariables("light");

const MuiRadioGroup = {
  styleOverrides: {
    root: {
      gap: variables.margin,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiRadioGroup;
