import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiStepper = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      root: {
        padding: variables.stepperPadding,
        background: variables.palette.background.paper,
        color: variables.palette.text.primary,
      },
      icon: {
        fontSize: variables.stepIconSize,
      },
      connector: {
        borderWidth: variables.stepConnectorThickness,
        borderColor: variables.palette.border.main,
      },
    },
  };
};
export default MuiStepper;
