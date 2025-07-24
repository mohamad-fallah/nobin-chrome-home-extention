import getVariables from "../variables";

const variables = getVariables("light");

const MuiCircularProgress = {
  styleOverrides: {
    root: {
      color: variables.palette.primary.main,
      thickness: variables.progressThickness,
    },
  },
};
export default MuiCircularProgress;
