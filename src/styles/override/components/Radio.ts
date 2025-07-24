import getVariables from "../variables";

const variables = getVariables("light");

const MuiRadio = {
  styleOverrides: {
    root: {
      color: variables.palette.primary.main,
      fontSize: variables.iconSize,
    },
    checked: {
      color: variables.palette.primary.main,
    },
  },
};
export default MuiRadio;
