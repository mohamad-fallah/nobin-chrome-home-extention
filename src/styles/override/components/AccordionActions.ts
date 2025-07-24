import getVariables from "../variables";

const variables = getVariables("light");

const MuiAccordionActions = {
  styleOverrides: {
    root: {
      padding: variables.padding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiAccordionActions;
