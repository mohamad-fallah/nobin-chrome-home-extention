import getVariables from "../variables";

const variables = getVariables("light");

const MuiAccordionDetails = {
  styleOverrides: {
    root: {
      padding: variables.padding,
      background: variables.palette.background.paper,
      color: variables.palette.text.primary,
    },
  },
};

export default MuiAccordionDetails;
