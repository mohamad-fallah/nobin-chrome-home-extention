import getVariables from "../variables";

const variables = getVariables("light");

const MuiCardHeader = {
  styleOverrides: {
    root: {
      padding: variables.cardPadding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiCardHeader;
