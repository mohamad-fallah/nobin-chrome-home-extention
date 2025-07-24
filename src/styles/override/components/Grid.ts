import getVariables from "../variables";

const variables = getVariables("light");

const MuiGrid = {
  styleOverrides: {
    root: {
      gap: variables.gridGutter,
    },
  },
};
export default MuiGrid;
