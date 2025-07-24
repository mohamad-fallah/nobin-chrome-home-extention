import getVariables from "../variables";

const variables = getVariables("light");

const MuiAccordionSummary = {
  styleOverrides: {
    root: {
      minHeight: variables.buttonHeight,
      padding: variables.padding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};
export default MuiAccordionSummary;
