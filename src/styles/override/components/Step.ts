import getVariables from "../variables";

const variables = getVariables("light");

const MuiStep = {
  styleOverrides: {
    root: {
      color: variables.palette.text.primary,
    },
    icon: {
      fontSize: variables.stepIconSize,
      color: variables.palette.primary.main,
    },
  },
};
export default MuiStep;
