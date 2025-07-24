import getVariables from "../variables";

const variables = getVariables("light");

const MuiStepConnector = {
  styleOverrides: {
    line: {
      borderWidth: variables.stepConnectorThickness,
      borderColor: variables.palette.border.main,
    },
  },
};
export default MuiStepConnector;
