import type { Theme } from "@mui/material/styles";
import getVariables from "../variables";

const MuiStepLabel = (theme: Theme) => {
  const variables = getVariables(theme.palette.mode);
  return {
    styleOverrides: {
      label: {
        fontSize: variables.stepLabelFontSize,
        color: variables.palette.text.primary,
      },
      active: {
        color: variables.palette.primary.main,
      },
      completed: {
        color: variables.palette.success.main,
      },
    },
  };
};
export default MuiStepLabel;
