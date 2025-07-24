import getVariables from "../variables";

const variables = getVariables("light");

const MuiBox = {
  styleOverrides: {
    root: {
      borderRadius: variables.borderRadius,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};

export default MuiBox;
