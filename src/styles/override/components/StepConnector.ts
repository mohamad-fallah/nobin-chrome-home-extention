import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiStepConnector = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      line: {
        borderWidth: variables.stepConnectorThickness,
        borderColor: variables.palette.border.main,
      },
    },
  };
};
export default MuiStepConnector;
